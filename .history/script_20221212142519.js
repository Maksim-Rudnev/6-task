// Сумма квадратов первых десяти натуральных чисел равна
// 12 + 22 + ... + 102 = 385
// Квадрат суммы первых десяти натуральных чисел равен
// (1 + 2 + ... + 10)2 = 552 = 3025
// Следовательно, разность между суммой квадратов и квадратом суммы первых десяти натуральных чисел составляет 3025 − 385 = 2640.
// Найдите разность между суммой квадратов и квадратом суммы первых ста натуральных чисел.

//math.pow(,)

const stop = 101;
let sumOfSquares = 0;
let tempSum = 0;
for(let i = 1; i < stop; i++) {
  sumOfSquares += Math.pow(i,2);
  tempSum += i;
}
console.log(Math.pow(tempSum,2) - sumOfSquares);
