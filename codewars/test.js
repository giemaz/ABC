function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) sum += arr[i];
  }
  return sum;
}
console.log(positiveSum([6, 3, -4]));

function makeNegative(num) {
  if (num === 0) {
    return 0;
  } else if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

console.log(makeNegative(0));

function solution(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(solution('cat'));

function removeChar(str) {
  return str.slice(1, -1);
}
console.log(removeChar('banner'));

function repeatStr(n, s) {
  if (n > 0) {
    return s.repeat(n);
  } else return '';
}

console.log(repeatStr(3, '*'));

console.clear();

const summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

function noSpace(x) {
  x = x.replace(/ /g, '');
}

function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sum += 1;
    }
  }
  return sum;
}
