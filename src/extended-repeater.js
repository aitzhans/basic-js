const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {


  if (typeof str != "string") {
    str = '' + str;
  }

  if ((options.separator != undefined && typeof options.separator != "string") || options.separator === null) {
    options.separator = '' + options.separator;
  } 
  if ((options.addition != undefined && typeof options.addition != "string") || options.addition === null) {
    options.addition = '' +  options.addition;
  } 
  if ((options.additionSeparator != undefined && typeof options.additionSeparator != "string") || options.additionSeparator === null) {
    options.additionSeparator = '' +  options.additionSeparator;
  } 
  

  let preAddition= ((options.addition || "") + (options.additionSeparator || '|') ).repeat(options.additionRepeatTimes || 1);
  // console.log(preAddition);
  let addition = (options.additionSeparator != undefined ) ? preAddition.substring(0, preAddition.length - (options.additionSeparator.length || 1)) : preAddition.substring(0, preAddition.length - 1);
  // console.log(addition);
  let preResult = (str + addition + (options.separator  || '+')).repeat(options.repeatTimes || 1);
  // console.log(preResult);
  let result = (options.separator != undefined) ? preResult.substring(0, preResult.length - options.separator.length) : preResult.substring(0, preResult.length - 1);
  // console.log(result);
  
  return result;
};