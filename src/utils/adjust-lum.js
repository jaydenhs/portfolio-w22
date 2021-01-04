// export default function adjustLum(hex, lum) {
//   console.log({ hex });
//   var usePound = false;

//   if (hex[0] == '#') {
//     hex = hex.slice(1);
//     usePound = true;
//   }

//   var num = parseInt(hex, 16);

//   var r = (num >> 16) + lum;

//   if (r > 255) r = 255;
//   else if (r < 0) r = 0;

//   var b = ((num >> 8) & 0x00ff) + lum;

//   if (b > 255) b = 255;
//   else if (b < 0) b = 0;

//   var g = (num & 0x0000ff) + lum;

//   if (g > 255) g = 255;
//   else if (g < 0) g = 0;

//   return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
// }

// function desaturate(color, amount) {
//   amount = amount === 0 ? 0 : amount || 10;
//   var hsl = tinycolor(color).toHsl();
//   hsl.s -= amount / 100;
//   hsl.s = clamp01(hsl.s);
//   return tinycolor(hsl);
// }

// // Force a number between 0 and 1
// function clamp01(val) {
//   return mathMin(1, mathMax(0, val));
// }

// function toHsl() {
//   var hsl = rgbToHsl(this._r, this._g, this._b);
//   return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
// }

export default function adjustLum(hsla, lum) {
  let sep = hsla.indexOf(',') > -1 ? ',' : ' ';
  hsla = hsla
    .substr(5)
    .split(')')[0]
    .split(sep);

  // Strip the slash
  if (hsla.indexOf('/') > -1) hsla.splice(3, 1);

  let h = hsla[0],
    s = hsla[1].substr(0, hsla[1].length - 1) / 100,
    l = hsla[2].substr(0, hsla[2].length - 1) / 100,
    a = hsla[3];

  // console.log({ h, s, l, a });

  l += lum;

  return `hsla(${h}, ${s * 100}%, ${l * 100}%,${a})`;
}
