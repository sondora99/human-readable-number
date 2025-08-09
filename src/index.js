module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const tens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const twenties = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  let result;
  function getOnes(num) {
    return ones[num];
  }
  function getTens(num) {
    return tens[num % 10];
  }
  function getTwenties(num) {
    if (num % 10 === 0) {
      return `${twenties[Math.floor(num / 10) - 2]}`;
    }
    return `${twenties[Math.floor(num / 10) - 2]} ${ones[num % 10]}`;
  }
  function getHundred(num) {
    if (num % 100 === 0) {
      return `${ones[num / 100]} hundred`;
    }
    if (num % 100 > 0 && num % 100 < 10) {
      return `${ones[Math.floor(num / 100)]} hundred ${getOnes(num % 100)}`;
    }
    if (num % 100 >= 10 && num % 100 <= 19) {
      return `${ones[Math.floor(num / 100)]} hundred ${getTens(num % 100)}`;
    }
    if (num >= 120 && num <= 999 && num % 10 === 0) {
      // 120, 130 ... 980, 990
      return `${ones[Math.floor(num / 100)]} hundred ${getTwenties(num % 100)}`;
    }
    if (num >= 120 && num <= 999 && num % 10 !== 0) {
      return `${ones[Math.floor(num / 100)]} hundred ${getTwenties(num % 100)}`;
    }
    return `${ones[Math.floor(num / 100)]} hundred ${getTwenties(num % 100)}`;
  }
  if (number >= 0 && number <= 9) {
    result = getOnes(number);
  } else if (number >= 10 && number <= 19) {
    result = getTens(number);
  } else if (number >= 20 && number <= 99) {
    result = getTwenties(number);
  } else if (number >= 100 && number <= 999) {
    result = getHundred(number);
  }
  return result;
};
