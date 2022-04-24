export const random = (min, max) => Math.random() * (max - min) + min;
export const clamp = (n, min, max) => Math.max(Math.min(n, max), min);
export const degreesToRads = (degrees) => (degrees / 180) * Math.PI;
export const radsToDegrees = (radians) => (radians * 180) / Math.PI;
export const randomInt = (min, max) => min + Math.random() * (max - min + 1);
export const sortDate = ({ frontmatter: d1 }, { frontmatter: d2 }) =>
  new Date(d2.published) - new Date(d1.published);

export const kebabcase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
    .replace(/[\s_]+/g, "-") // replace all spaces and low dash
    .toLowerCase();
};
