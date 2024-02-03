import { writable, derived } from 'svelte/store';
import { getOffsetX, getOffsetY } from '$lib/utils/offset';
import {
    getLightColor,
    getDarkColor,
    getOppositeColor
} from '$lib/utils/colors';

export const defaults = {
    lightColor: '#ffffff',
    darkColor: '#263238',
    angle: 45,
    offset: 5,
    coeff: 0,
    width: 10,
    showIcons: true,
    mode: true // true for light, false for dark
};

export const mode = writable(defaults.mode);
export const lightColor = writable(defaults.lightColor);
export const darkColor = writable(defaults.darkColor);
export const color = derived(
    [mode, lightColor, darkColor],
    ([$mode, $lightColor, $darkColor]) =>
        $mode ? $lightColor : $darkColor
);

export const angle = writable(defaults.angle);
export const offset = writable(defaults.offset);
export const coeff = writable(defaults.coeff);
export const width = writable(defaults.width);
export const showIcons = writable(defaults.showIcons);

export const cssData = derived(
    [mode, color, angle, offset, coeff, width, showIcons],
    ([
        $mode,
        $color,
        $angle,
        $offset,
        $coeff,
        $width,
        $showIcons
    ]) => {
        return {
            color: $color,
            angle: $angle,
            showIcons: $showIcons,
            shadowWidth: $width + 'px',
            textShadowWidth: ($width / 2).toFixed(1) + 'px',
            iconColor: getOppositeColor($color),
            offsetX: getOffsetX($angle, $offset) + 'px',
            offsetY: getOffsetY($angle, $offset) + 'px',
            shapeBg: $mode
                ? getLightColor($color, 10 + $coeff)
                : getDarkColor($color, 10 + $coeff),
            boxShadow: $mode
                ? getLightColor($color, 60 + $coeff)
                : getDarkColor($color, 60 + $coeff),
            boxShadowInset: $mode
                ? getLightColor($color, 20 + $coeff)
                : getDarkColor($color, 20 + $coeff),
            gradientFocusedFrom: $mode
                ? getLightColor($color, 50 + $coeff)
                : getDarkColor($color, 50 + $coeff),
            gradientFocusedTo: $mode
                ? getLightColor($color, 70 + $coeff)
                : getDarkColor($color, 70 + $coeff)
        };
    }
);
