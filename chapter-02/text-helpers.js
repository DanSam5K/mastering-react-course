export const removeNonAlpha = (str) => str.replace(/[^a-z]/gi, '');

export const countCharacters = (str) => str.length;
export const countWords = (str) => str.split(' ').length;
export const log = (str) => console.log(str);
