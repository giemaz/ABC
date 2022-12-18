// -------------------Variable operations-------------------

// 1.
const one = 1;
const two = -6;
const three = 0;

const sum = one + two + three;
console.log(sum);

//2.
const stringA = 'hello';
const stringB = 'world';
const stringC = '!';

const sentence = `${stringA} ${stringB} ${stringC}`;
console.log(sentence);

//3.
const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumOfArray([5, 6, 2]));
//4.
const arrayA = ['lorem', 'ipsum', 'dos', 'bla'];
const arrayB = ['cat', 'man', 'bear', 'pig'];
const arrayC = ['apple', 'banana', 'peach'];

const megaArray = `${arrayA}, ${arrayB}, ${arrayC}`;
console.log(megaArray);
