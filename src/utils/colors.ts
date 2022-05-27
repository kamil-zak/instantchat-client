import color from 'color';

export const getContrastColor = (base: string) => color(base).lightness(color(base).isDark() ? 95 : 10);
