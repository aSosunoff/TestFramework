/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function sum(m, n) {
  if (!isNumber(m) || !isNumber(n)) {
    throw new TypeError('Не число');
  }

  return m + n;
}
  
function isNumber(a) {
  return typeof a === 'number';
}

/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (!isNumber(n)) { 
    throw new TypeError('Значение может быть целым числом');
  }

  if (Number.isNaN(n)) { 
    throw new TypeError('Значение должно быть числом');
  }

  if (n === Infinity) { 
    throw new TypeError('Значение не должно быть бесконечным');
  }

  let factorialResult = 1;

  while (n) {
    factorialResult *= n--;
  }
	
  return factorialResult;
}

module.exports = {
  sum,
  isNumber,
  factorial
}