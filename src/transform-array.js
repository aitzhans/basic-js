const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {

      switch(arr[i]) {
        case '--discard-next':

          if (arr[i + 1] != "undefined") {
            i += 1;
          }
          break;
        case '--discard-prev':
          if (i != 0 && arr[i - 2] != '--discard-next') {
            if (arr[i - 1] === result[result.length - 1] || ( isNaN(result[result.length - 1]) && isNaN(arr[i-1]) ) ) {
              result.pop();
            }            
          }
          break;
        case '--double-next':
          if (i != arr.length - 1 &&  arr[i + 1] != "undefined"  ) {
            result.push(arr[i+1]);
          }
          break;
        case '--double-prev':
          if (i != 0 && isNaN(arr[i - 1]) && isNaN(result[result.length - 1]) && result.length > 0 && arr[i - 2] != '--discard-next') {
            result.push(arr[i - 1]);
          } else if (i != 0 && arr[i - 1] === result[result.length - 1] && arr[i - 2] != '--discard-next') {
            result.push(arr[i-1]);
          } 
          break;
        default:
          result.push(arr[i]);
          break;
      }
    }
    return result;   
  }


  throw new Error;

};