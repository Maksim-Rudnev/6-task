console.time('1');
const stop = 101;
let sumOfSquares = 0;
let tempSum = 0;
for(let i = 1; i < stop; i++) {
  sumOfSquares += Math.pow(i,2);
  tempSum += i;
}
console.log(Math.pow(tempSum,2) - sumOfSquares);
console.timeEnd('1');