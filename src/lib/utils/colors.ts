export const transformColor = (color: string, coeff: number) => {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    r += -coeff;
    g += -coeff;
    b += -coeff;
    r = Math.max(0, Math.min(r, 255));
    g = Math.max(0, Math.min(g, 255));
    b = Math.max(0, Math.min(b, 255));

    return (
        '#' +
        (r < 16 ? '0' : '') +
        r.toString(16) +
        (g < 16 ? '0' : '') +
        g.toString(16) +
        (b < 16 ? '0' : '') +
        b.toString(16)
    );
};
