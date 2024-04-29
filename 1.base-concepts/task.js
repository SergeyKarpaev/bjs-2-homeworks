"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		arr.push(-b / (2 * a));
	} else if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
	}
	return arr;
}
console.log(solveEquation(2, 3, 1))


let percent;
let contribution;
let amount;
let countMonths;
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let monthlyPayment = amount - contribution;
  let payment = monthlyPayment * (percent + (percent / (((1 + percent) ** countMonths) - 1)))
  let summa = parseFloat(payment * countMonths);
  return summa.toFixed(2);
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));