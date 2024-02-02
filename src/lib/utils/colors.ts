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

export const getOppositeColor = (color: string) => {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);

    const oppositeR = 255 - r;
    const oppositeG = 255 - g;
    const oppositeB = 255 - b;

    return (
        '#' +
        (oppositeR < 16 ? '0' : '') +
        oppositeR.toString(16) +
        (oppositeG < 16 ? '0' : '') +
        oppositeG.toString(16) +
        (oppositeB < 16 ? '0' : '') +
        oppositeB.toString(16)
    );
};
