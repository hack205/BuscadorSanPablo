export const white = '#FFFFFF';
export const blue = '#44B2E8';
export const grey = '#808080';
export const transparent = 'transparent';

export const randomColor = () =>
  '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
