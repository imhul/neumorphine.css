export const getOffsetX = (angle: number, offset: number) => {
    return Math.round(Math.cos(((angle - 90) * Math.PI) / 180) * offset);
}

export const getOffsetY = (angle: number, offset: number) => {
    return Math.round(Math.sin(((angle - 90) * Math.PI) / 180) * offset);
}
