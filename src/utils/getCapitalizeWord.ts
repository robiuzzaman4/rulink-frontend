/**
 * Convert a string to capitalized words.
 * @param {string} str - The string to be converted.
 * @param {string} [delimiter="_"] - The delimiter to split the string by (default is "_").
 * @returns {string} - The capitalized string.
 */
export const getCapitalizeWord = (str: string, delimiter = "_") => {
  return str
    .toLowerCase()
    .split(delimiter)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Example usage:
// const result1 = capitalizeWords("PART_TIME"); // "Part Time"
