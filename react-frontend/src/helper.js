// stack overflow -> https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export const numberWithCommas = (num) => {
  const fixedNum = Number(num).toFixed(2);
  return fixedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// stack overflow -> https://stackoverflow.com/questions/1303646/check-whether-variable-is-number-or-string-in-javascript
export const isNumber = (val) => {
  return !isNaN(parseFloat(val) && !isNaN(val - 0));
}