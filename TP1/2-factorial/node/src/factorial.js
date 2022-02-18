/**
 * Return the factorial of i.
 * @param {number} i - an integer number.
 * @return {number} the factorial of i.
 */
let factorial = function (i) {
  // À compléter.
  if (i === null) throw "i can't be null";
  else if (!Number.isInteger(i)) throw "i must be a number";
  else if (i < 0) throw "i must be positive";
  else if (i == 0) return 1;
  else {
    let res = 1;
    for (let index = 1; index <= i; index++) {
      res *= index;
    }
    return res;
  }
};

module.exports = factorial;
