import { useEffect, useRef } from "react";
import * as THREE from "three";
import shadedImages from "./ShadedImages";
import vertex from "../../../public/assets/shaders/vertex.glsl";
import fragment from "../../../public/assets/shaders/fragment.glsl";

const Shaded = () => {
  const landingRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    introRef.current = document.querySelector(".intro");
    landingRef.current = document.querySelector(".landing");

    const loader = new THREE.TextureLoader();
    const imageUrls = Object.values(shadedImages);
    const textureCache = imageUrls.map((url) => loader.load(url));
    let animationId;
    let hovered = false;

    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }

    class Shaded {
      constructor() {
        this.container = landingRef.current;
        this.inner = introRef.current;
        this.targetX = 0;
        this.targetY = 0;
        this.scene = new THREE.Scene();
        this.perspective = 1000;
        this.sizes = new THREE.Vector2(0, 0);
        this.offset = new THREE.Vector2(0, 0);
        this.targetOffset = new THREE.Vector2(0, 0);
        this.currentImageIndex = 0;

        this.uniforms = {
          uTexture: { value: textureCache[this.currentImageIndex] },
          uAlpha: { value: 0.0 },
          uOffset: { value: new THREE.Vector2(0.0, 0.0) },
          transparent: true,
        };

        // Set an interval to change the texture every 5 seconds
        this.textureInterval = setInterval(() => {
          this.currentImageIndex =
            (this.currentImageIndex + 1) % textureCache.length;
          this.uniforms.uTexture.value = textureCache[this.currentImageIndex];
        }, 5000);

        this.setupCamera();
        this.followMouseMove();
        this.createMesh();
        this.checkHovered();
        this.render();
      }

      get viewport() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let aspectRatio = width / height;
        let pixelRatio = window.devicePixelRatio;

        return {
          width,
          height,
          aspectRatio,
          pixelRatio,
        };
      }

      checkHovered() {
        this.inner.addEventListener("mouseenter", () => {
          hovered = true;
        });
        this.inner.addEventListener("mouseleave", () => {
          hovered = false;
        });
      }

      setupCamera() {
        window.addEventListener("resize", this.onResize.bind(this));
        let fov =
          (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
          Math.PI;

        this.camera = new THREE.PerspectiveCamera(
          fov,
          this.viewport.aspectRatio,
          0.1,
          1000
        );
        this.camera.position.set(0, 0, this.perspective);

        this.renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(this.viewport.pixelRatio);
        this.container.appendChild(this.renderer.domElement);
      }

      onResize() {
        const resizeHandler = () => {
          this.camera.aspect = this.viewport.aspectRatio;
          this.camera.fov =
            (180 *
              (2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
            Math.PI;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(this.viewport.width, this.viewport.height);
        };

        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(resizeHandler, 100);
      }

      createMesh() {
        this.geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
        this.material = new THREE.ShaderMaterial({
          uniforms: this.uniforms,
          vertexShader: vertex,
          fragmentShader: fragment,
          transparent: true,
          blending: THREE.NormalBlending,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.sizes.set(370, 470, 1);
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.scene.add(this.mesh);
      }

      followMouseMove() {
        window.addEventListener("mousemove", (e) => {
          this.targetX = e.clientX;
          this.targetY = e.clientY;
        });
      }

      render() {
        this.offset.x = lerp(this.offset.x, this.targetX, 0.1);
        this.offset.y = lerp(this.offset.y, this.targetY, 0.1);
        this.uniforms.uOffset.value.set(
          (this.targetX - this.offset.x) * 0.001,
          -(this.targetY - this.offset.y) * 0.001
        );
        this.mesh.position.set(
          this.offset.x - window.innerWidth / 2,
          -this.offset.y + window.innerHeight / 2
        );

        this.uniforms.uAlpha.value = lerp(
          this.uniforms.uAlpha.value,
          hovered ? 1.0 : 0.0,
          0.1
        );

        this.renderer.render(this.scene, this.camera);
        animationId = requestAnimationFrame(this.render.bind(this));
      }

      dispose() {
        clearInterval(this.textureInterval);
        this.renderer.dispose();
        this.geometry.dispose();
        this.material.dispose();
        window.removeEventListener("resize", this.onResize.bind(this));
        window.removeEventListener("mousemove", this.handleMouseMove);
      }
    }

    const shadedInstance = new Shaded();

    return () => {
      window.cancelAnimationFrame(animationId);
      shadedInstance.dispose();
    };
  }, []);

  return null;
};

export default Shaded;
