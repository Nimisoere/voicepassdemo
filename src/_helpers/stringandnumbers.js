function commanumbers(number) {
  let numberString;
  if (number !== undefined) {
    numberString = number.toLocaleString(undefined, {
      maximumFractionDigits: 2
    });
  }
  return numberString;
}

export const stringsandnumbers = {
  commanumbers
};
