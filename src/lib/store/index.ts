import { writable } from 'svelte/store';

const defaults = {
    color: '#ffffff',
    angle: 45,
    offset: 5,
    offsetX: '',
    offsetY: '',
    coeff: 0,
    width: 10,
    shapeBg: '',
    boxShadow: '',
    boxShadowInset: '',
    shadowWidth: '',
    gradientFocusedFrom: '',
    gradientFocusedTo: '',
}

export const color = writable(defaults.color);

export const angle = writable(defaults.angle);

export const offset = writable(defaults.offset);

export const coeff = writable(defaults.coeff);

export const width = writable(defaults.width);

export const cssData = writable(defaults);
