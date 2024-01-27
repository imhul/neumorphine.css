// coeff: 30
// colors: from #ffffff to #eceff1
export const transformColor = (color: string, coeff: number) => {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    let isLightColor = (r + g + b) / 3 > 128;
    let coefficient = isLightColor ? -coeff : coeff;
    r += coefficient;
    g += coefficient;
    b += coefficient;
    r = Math.max(0, Math.min(r, 255));
    g = Math.max(0, Math.min(g, 255));
    b = Math.max(0, Math.min(b, 255));

    return '#' + (r < 16 ? '0' : '') + r.toString(16) +
        (g < 16 ? '0' : '') + g.toString(16) +
        (b < 16 ? '0' : '') + b.toString(16);
}

// coeff: 48
// colors: from #ffffff to #c9cbcd

// coeff: 85
// colors: from #ffffff to #a3a5a6
