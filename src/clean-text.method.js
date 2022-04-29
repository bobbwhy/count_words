

export const cleanText = text =>
  text.toLowerCase()
    .replace(/\n/g, '')
    .replace(/[^a-z-\s]/g, '');
