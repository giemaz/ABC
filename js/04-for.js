//1.

function rangeSum(from, to) {
  if (typeof from !== 'number') {
    return 'ERROR: pirmasis parametras turi buti skaicius';
  }
  if (typeof to !== 'number') {
    return 'ERROR: antrasis parametras turi buti skaicius';
  }

  if (!isFinite(from)) {
    return 'ERROR: pirmasis parametras turi buti normalus skaicius';
  }
  if (!isFinite(to)) {
    return 'ERROR: antrasis parametras turi buti normalus skaicius';
  }

  if (from % 1 !== 0) {
    return 'ERROR: pirmasis parametras turi buti sveikasis skaicius';
  }
  if (to % 1 !== 0) {
    return 'ERROR: antrasis parametras turi buti sveikasis skaicius';
  }

  let sum = 0;

  if (from < to) {
    for (let i = from; i <= to; i++) {
      sum += i;
    }
  }

  if (from > to) {
    for (let i = to; i <= from; i++) {
      sum += i;
    }
  }

  if (from === to) {
    sum += from;
  }

  return sum;
}
console.log(rangeSum(0, 4), '-->', 10);

//2.
function backwards(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(backwards('cat'));
console.clear();
//3
const modulusZeroCount = (a, b, c) => {
  let arr = [];
  let count = 0;
  let sum;
  for (let i = a; i <= b; i++) {
    arr.push(i);
    if (i % c === 0) {
      count += 1;
      sum = `Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ${c} yra ${count} vienetai.`;
    }
  }
  return sum;
};
console.log(modulusZeroCount(0, 11, 7));
