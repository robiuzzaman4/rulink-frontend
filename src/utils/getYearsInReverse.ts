export const getYearsInReverse = (): string[] => {
  const currentYear = new Date().getFullYear();
  const years: string[] = [];
  for (let year = currentYear; year >= 1970; year--) {
    years.push(year.toString());
  }
  return years;
};

// Example usage
// export const YEARS = getYearsInReverse();
