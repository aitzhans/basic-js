const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (arguments.length === 0) {
    return ('Unable to determine the time of year!');
  }

  if ( Object.prototype.toString.call(date) === '[object Date]' ) {
    let month;

    try {
      month = date.getMonth();
    } catch (e) {
      throw new CustomError ('Error');
    }

    if (month < 2 || month === 11) {
      return "winter";
    } else if (month < 5) {
      return "spring";
    } else if (month < 8) {
      return "summer";
    } else {
      return "autumn";
    }
  }
  throw new Error ('Enemy detected!');
    
  
};
