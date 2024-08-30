uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec2 uOffset;
varying vec2 vUv;

vec3 rgbShift(sampler2D textureimage, vec2 uv, vec2 offset) {
    // Perform a single texture lookup
    vec4 texColor = texture2D(textureimage, uv);

    // Calculate the offset for the red channel only
    float r = texture2D(textureimage, uv + offset).r;

    // Return the shifted color vector
    return vec3(r, texColor.g, texColor.b);
}

void main() {
    // Apply the RGB shift effect using the function
    vec3 shiftedColor = rgbShift(uTexture, vUv, uOffset);

    // Output the final fragment color with combined alpha
    gl_FragColor = vec4(shiftedColor, texture2D(uTexture, vUv).a * uAlpha);
}
