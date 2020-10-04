const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if ( typeof(sampleActivity) != String 
        || sampleActivity === null 
        || sampleActivity === undefined) {
    return false;
  }

  sampleActivity = parseFloat(sampleActivity);
  let age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD));
  return age;
};
