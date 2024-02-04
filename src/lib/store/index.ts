import { writable, derived } from 'svelte/store';
import { getOffsetX, getOffsetY } from '$lib/utils/offset';
import { defaults } from '$lib/utils/config';
import {
    getLightColor,
    getDarkColor,
    getOppositeColor,
    isValidColor
} from '$lib/utils/colors';

const createLightColor = () => {
    const { subscribe, set, update } = writable(defaults.lightColor);
    return {
        update,
        subscribe,
        set: (color: string) => {
            isValidColor(color) && set(color);
        }
    };
};

const createDarkColor = () => {
    const { subscribe, set, update } = writable(defaults.darkColor);
    return {
        update,
        subscribe,
        set: (color: string) => {
            isValidColor(color) && set(color);
        }
    };
};

const createAngle = () => {
    const { subscribe, set, update } = writable(defaults.angle);
    return {
        update,
        subscribe,
        set: (angle: number) => {
            if (angle >= -90 && angle <= 270) {
                set(angle);
            }
        }
    };
};

export const mode = writable(defaults.mode);
export const lightColor = createLightColor();
export const darkColor = createDarkColor();
export const angle = createAngle();
export const offset = writable(defaults.offset);
export const coeff = writable(defaults.coeff);
export const width = writable(defaults.width);
export const showIcons = writable(defaults.showIcons);
export const color = derived(
    [mode, lightColor, darkColor],
    ([$mode, $lightColor, $darkColor]) =>
        $mode ? $lightColor : $darkColor
);

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
            boxShadowLight: getLightColor($color, 60 + $coeff),
            boxShadowDark: getDarkColor($color, 60 + $coeff),
            boxShadowInsetLight: getLightColor($color, 20 + $coeff),
            boxShadowInsetDark: getDarkColor($color, 20 + $coeff),
            gradientFocusedFrom: $mode
                ? getLightColor($color, 50 + $coeff)
                : getDarkColor($color, 50 + $coeff),
            gradientFocusedTo: $mode
                ? getLightColor($color, 70 + $coeff)
                : getDarkColor($color, 70 + $coeff)
        };
    }
);
