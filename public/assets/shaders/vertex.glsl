uniform vec2 uOffset;
varying vec2 vUv;

const float M_PI = 3.14159265359;

vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset){
    float sinX = sin(uv.y * M_PI);
    float sinY = sin(uv.x * M_PI);
    position.x += sinX * offset.x;
    position.y += sinY * offset.y;
    return position;
}

void main(){
    vUv = uv;
    vec3 newPosition = deformationCurve(position, uv, uOffset);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0) * 0.9;
}
