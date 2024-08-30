import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBg = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background to black

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Resize handler
    const resizeHandler = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", resizeHandler);

    // Create Points for the Galaxy
    const numPoints = 5000; // Fewer stars for realism
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(numPoints * 3);
    const sizes = new Float32Array(numPoints);
    const colors = new Float32Array(numPoints * 3);

    for (let i = 0; i < numPoints; i++) {
      // Generate a random position
      const theta = Math.random() * Math.PI * 2; // Angle
      const radius = Math.random() * 400 + 100; // Radius with a minimum distance to create a gap
      const x = radius * Math.cos(theta);
      const y = (Math.random() - 0.5) * 100; // Vertical spread for outer stars
      const z = radius * Math.sin(theta);

      // Set the position
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Set the size (make some stars brighter)
      sizes[i] = Math.random() * 4 + 5; // Larger stars

      // Set color with realistic star colors (white, yellow, blue)
      const color = new THREE.Color();
      const starType = Math.random();
      if (starType < 0.5) {
        color.set(0xffffff); // White stars
      } else if (starType < 0.85) {
        color.set(0xffddaa); // Yellow stars
      } else {
        color.set(0xadd8e6); // Blue stars
      }
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("vertexColor", new THREE.BufferAttribute(colors, 3)); // Use 'vertexColor' to avoid conflicts

    // Shader material for stars with color and size attributes
    const material = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: {
          value: new THREE.TextureLoader().load(
            "https://threejs.org/examples/textures/sprites/disc.png" // Texture for star points
          ),
        },
        uTime: { value: 0.0 }, // Uniform for time to animate stars
      },
      vertexShader: `
        attribute float size;
        attribute vec3 vertexColor;
        varying vec3 vColor;
        uniform float uTime;

        void main() {
            vColor = vertexColor;

            // Add flickering effect to size
            float flicker = 0.5 + 0.5 * sin(uTime + position.x * 10.0);
            float adjustedSize = size * flicker;

            // Add individual star movement with oscillation
            vec3 newPosition = position;
            newPosition.x += sin(uTime + position.y) * 0.5;
            newPosition.y += cos(uTime + position.x) * 0.5;
            newPosition.z += sin(uTime + position.z) * 0.5;

            vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
            gl_PointSize = adjustedSize * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying vec3 vColor;

        void main() {
            vec4 texColor = texture2D(pointTexture, gl_PointCoord);
            float flicker = 0.8 + 0.2 * sin(gl_FragCoord.x * 10.0 + gl_FragCoord.y * 10.0); // Flickering effect
            gl_FragColor = vec4(vColor * flicker, 1.0) * texColor;
        }
      `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
      vertexColors: true, // Use the vertex colors
    });

    // Create Points Object for stars
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Create Point Lights at random star locations
    const createPointLight = (x, y, z, color) => {
      const pointLight = new THREE.PointLight(color, 50, 1000); // Adjusted intensity and distance
      pointLight.position.set(x, y, z);
      scene.add(pointLight);
    };

    for (let i = 0; i < 1000; i++) {
      const lightX = (Math.random() - 0.5) * 400; // Reduced range for better visibility
      const lightY = (Math.random() - 0.5) * 200;
      const lightZ = (Math.random() - 0.5) * 400;
      const lightColor = new THREE.Color(0xffffff); // White light for stars
      createPointLight(lightX, lightY, lightZ, lightColor);
    }

    // Create a Black Hole (Dark Sphere)
    const blackHoleRadius = 100; // Radius of the black hole
    const blackHoleGeometry = new THREE.SphereGeometry(blackHoleRadius, 32, 32);
    const blackHoleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
    scene.add(blackHole);

    // Add Meteor or Asteroid Objects
    const asteroidGeometry = new THREE.SphereGeometry(1, 8, 8);
    const asteroidMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
    const asteroids = [];

    for (let i = 0; i < 20; i++) {
      const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
      asteroid.position.set(
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 500,
        (Math.random() - 0.5) * 1000
      );
      asteroid.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
      );
      scene.add(asteroid);
      asteroids.push(asteroid);
    }

    camera.position.z = 375;

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime(); // Get elapsed time
      material.uniforms.uTime.value = elapsedTime; // Update time uniform

      // Damping factor that decreases over time
      const dampingFactor = Math.exp(-0.4 * elapsedTime);

      // Rotate the galaxy around its center with damping
      points.rotation.y += 0.08 * dampingFactor; // Rotate slower over time
      points.rotation.x += 0.05 * dampingFactor;

      // Move asteroids and check for black hole absorption
      for (let i = asteroids.length - 1; i >= 0; i--) {
        const asteroid = asteroids[i];
        asteroid.position.add(asteroid.velocity);

        // Check distance from asteroid to black hole center
        const distanceToBlackHole = asteroid.position.distanceTo(
          blackHole.position
        );

        if (distanceToBlackHole < blackHoleRadius) {
          // Remove asteroid from scene and array
          scene.remove(asteroid);
          asteroids.splice(i, 1);
        } else if (asteroid.position.length() > 1000) {
          // Reset asteroid position if it moves out of bounds
          asteroid.position.set(
            (Math.random() - 0.5) * 1000,
            (Math.random() - 0.5) * 500,
            (Math.random() - 0.5) * 1000
          );
        }
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", resizeHandler);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      blackHoleGeometry.dispose();
      blackHoleMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="three__bg"></div>;
};

export default ThreeBg;
