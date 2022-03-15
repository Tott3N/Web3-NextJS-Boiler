const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const shorthandRegex = /^#?([\da-f])([\da-f])([\da-f])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null;
};

export const rgba = (hex: string, alpha: number): string => {
  const color = hexToRgb(hex);
  return `rgba(${color?.r}, ${color?.g}, ${color?.b}, ${alpha})`;
};
