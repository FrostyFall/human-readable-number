// toReadable(1) - one
// toReadable(12) - twelve
// toReadable(20) - twenty
// toReadable(47) - forty seven
// toReadable(997) - nine hundred ninety seven

// 1. create object with keys - numbers, values - hrv; all numbers from 1-19, 20, 30, 40, ..., 90;
// 2. check if number >= 0 AND number < 20 - return hrn from object
// 3. convert input to string
// 4. check length of input; if length 2 - check object for 1-90 values; if length 3 -
// output '{firstNum} hundred {secondNum}(check in object) {lastNum}'; if length 4 -
// output '{num[0]} thousand {num[1]} hundred {num[2]}(check in object) {num[3]}';
// if current char is '0' - continue;
// 5. return string representing human readable number

module.exports = function toReadable (number) {
  if (typeof number !== 'number' || number < 0) return 'Invalid number';

  const humanReadNums = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
  }
  if (number >= 0 && number < 20) return humanReadNums[number]; 
  
  let result = '';
  const numStr = number.toString();
  const numLength = numStr.length;

  for (let i = 0; i < numLength; i++) {
    if (numStr[i] !== '0') {
      if (i === numLength - 4) result += humanReadNums[numStr[i]] + ' thousand ';
      else if (i === numLength - 3) result += humanReadNums[numStr[i]] + ' hundred ';
      else if (i === numLength - 2) {
        const lastTwoDigits = numStr[i] + numStr[i + 1];

        if (lastTwoDigits > 0 && lastTwoDigits < 20) {
          result += humanReadNums[lastTwoDigits]
          break;
        }
        else result += humanReadNums[numStr[i] + '0'] + ' ';
      }
      else if (i === numLength - 1) result += humanReadNums[numStr[i]];
      else return null;
    }
  }

  if (result.length !== 0) return result.trim();
  return null;
}