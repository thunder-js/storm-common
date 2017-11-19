export const hexToDec = hex => parseInt(hex, 16);
export const applyAlpha = (hexString, alpha) => {
  const withoutHex = hexString.substring(1);
  const rHex = withoutHex.slice(0, 2);
  const gHex = withoutHex.slice(2, 4);
  const bHex = withoutHex.slice(4, 6);
  return `rgba(${hexToDec(rHex)}, ${hexToDec(gHex)}, ${hexToDec(bHex)}, ${alpha})`;
};
