// ------------------Functions---------------

// 1.
const empty = () => {
  return false;
};
console.log(empty());

// 2.
const multiply = (a, b) => {
  const sum = a * b;
  return sum;
};
console.log(multiply(5, 3));

// 3.
// console.clear();

const arrayNumberCount = (a) => {
  if (typeof a !== 'number') {
    console.log('Variable must be a number');
  } else if (!isFinite(a)) {
    return 'ERROR: Wrong number type';
  } else if (a % 1 !== 0) {
    return 'ERROR: number must be integer';
  } else {
    const numL = a.toString().length;
    return numL;
  }
};
console.log(arrayNumberCount(321.5));
// console.clear();

//4

const biggestNumberInArray = (a) => {
  if (!Array.isArray(a)) {
    console.log('Error: Wrong type input');
  } else if (a.length <= 0) {
    console.log('Variable must be an array and not empty');
  } else {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
      if (a[i] > max) {
        max = a[i];
      }
    }
    return max;
  }
};
console.log(biggestNumberInArray([-1, -2, -3, -5, 78.5]));

// 5.

const pickLetterFromWord = (word, nth) => {
  if (typeof word !== 'string') {
    console.log('Word must be a string type!');
  } else if (word.length <= 0 || word.length > 100) {
    console.log('Wrong size of the word!');
  } else if (typeof nth !== 'number') {
    console.log('Index must be a number!');
  } else if (nth <= 0) {
    console.log('Index must be bigger than zero!');
  } else if (nth > word.length) {
    console.log("Index can't be bigger than word letter count!");
  } else if (!isFinite(nth)) {
    return 'ERROR: Wrong number type';
  } else if (nth % 1 !== 0) {
    return 'ERROR: number must be integer';
  } else {
    let result = '';
    for (let i = -1; i < word.length; i = i + nth) {
      result += word.charAt(i);
    }
    return result;
  }
};
console.log(pickLetterFromWord('alphabet', 4));

//6.

const divide = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return console.log('Both variables must be type of number!');
  } else if (a === 0 || b === 0) {
    return console.log("You can't divide from zero");
  } else if (!isFinite(a) || !isFinite(b)) {
    return "ERROR: To infinity and beyond only possible in toy's story";
  } else {
    let sum = a / b;
    return sum;
  }
};
console.log(divide('cat', 2));

console.clear();
