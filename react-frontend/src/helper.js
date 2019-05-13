// stack overflow -> https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export const numberWithCommas = (num) => {
  const fixedNum = Number(num).toFixed(2);
  return fixedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// stack overflow -> https://stackoverflow.com/questions/1303646/check-whether-variable-is-number-or-string-in-javascript
export const isNumber = (val) => {
  return !isNaN(parseFloat(val) && !isNaN(val - 0));
}

// stack overflow -> https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
export const nFormatter = (num) => {
  if (num >= 1000000000) {
    return (num/1000000000).toFixed(2) + 'B';
  } else if (num >= 1000000) {
    return (num/1000000).toFixed(2) + 'M';
  } else if (num >= 1000) {
    return (num/1000).toFixed(2) + 'K'
  } else {
    return String(num);
  }
}

export const getMinMax = (historicalPrices, key) => {
  const values = historicalPrices.map(price => price[key]);
  const low = key === 'date' ? values[0] : Math.min(...values);
  const high = key === 'date' ? values[values.length - 1] : Math.max(...values);
  return { low, high };
}