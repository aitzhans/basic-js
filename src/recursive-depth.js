const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    function isArraysEqual(a, b) {
      return Array.isArray(a) &&
              Array.isArray(b) &&
              a.length === b.length &&
              a.every((val, index) => val === b[index]);
    }

    let flattened = arr.flat();
    // console.log(flattened);
    // console.log(arr);
    if ( isArraysEqual(arr, flattened) ) {
      return 1;
    } else {
      return (1 + this.calculateDepth(flattened)) ;
    }

  }
};
