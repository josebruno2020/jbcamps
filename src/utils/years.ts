export function differenceInYears(year: string): number {
  const currentYear = new Date().getFullYear();
  return Math.ceil(currentYear - Number(year));
}
