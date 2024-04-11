#ifdef GL_ES
precision mediump float;
#endif

varying vec2 v_texCoords;
uniform sampler2D u_texture;
uniform float u_pixelSize;

void main() {
    vec2 pixelatedCoords = vec2(u_pixelSize * floor(v_texCoords.x / u_pixelSize),
                                u_pixelSize * floor(v_texCoords.y / u_pixelSize));
    gl_FragColor = texture2D(u_texture, pixelatedCoords);
}
