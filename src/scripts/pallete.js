import Color from "color";

export const pallete = {
    main: Color('#ffE0f5'),
    accent: Color('#EE72F1'),
    bg: Color("#40343e")
};

export function make_even_radial_gradient(colors) {
    var str_out = "conic-gradient("
    for(const color of colors) {
        str_out += color + ", "
    }
    str_out += color[0] + ")"
    return str_out;
}