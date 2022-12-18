// ------------------Variable comparisons------------------------------

// 1.
const a = 6;
const b = 6;

if (a > b) {
  console.log(`${a} is more than ${b}`);
} else if (a < b) {
  console.log(`${a} is less than ${b}`);
} else if (a === b) {
  console.log(`${a} is equal to ${b}`);
} else {
  console.log('Error!');
}

if (a >= b) {
  console.log(`${a} is more or equal than ${b}`);
} else if (a <= b) {
  console.log(`${a} is less or equal than ${b}`);
}

//2.

const greet = 'Hello world!';
const shout = 'wow!';
// 3.

const gl = greet.length;
const sl = shout.length;

if (gl > sl) {
  console.log(`${gl} is more than ${sl}`);
} else if (gl < sl) {
  console.log(`${a} is less than ${sl}`);
} else if (gl === sl) {
  console.log(`${gl} is equal to ${sl}`);
} else {
  console.log('Error!');
}

if (gl >= sl) {
  console.log(`${gl} is more or equal than ${sl}`);
} else if (gl <= sl) {
  console.log(`${gl} is less or equal than ${sl}`);
}

//4.
const arrayC = ['a', 'b', 'c', 'd', 'e'];
const arrayD = [1, 2, 3, 4];

const c = arrayC.length;
const d = arrayD.length;
//5.
if (c > d) {
  console.log(`${c} is more than ${d}`);
} else if (c < d) {
  console.log(`${a} is less than ${d}`);
} else if (c === sl) {
  console.log(`${c} is equal to ${d}`);
} else {
  console.log('Error!');
}

if (c >= d) {
  console.log(`${c} is more or equal than ${d}`);
} else if (c <= d) {
  console.log(`${c} is less or equal than ${d}`);
}
