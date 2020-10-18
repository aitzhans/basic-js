const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  numOfLinks: 0,

  getLength() {
    // throw new CustomError('Not implemented');
    return chainMaker.numOfLinks;
    // remove line with error and write your code here
  },
  addLink(value='') {
    if (chainMaker.chain === '') {
      chainMaker.chain = (value === '') ? "( )" : "( " + value + " )";
    } else {
      chainMaker.chain = (value === '') ? chainMaker.chain + "~~( )" : chainMaker.chain + "~~( " + value + " )";
    }
    chainMaker.numOfLinks += 1;
    return chainMaker;
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let numOfLinks = chainMaker.numOfLinks;
    // console.log(numOfLinks);
    if ( Number.isInteger(position) && (position <= numOfLinks) ) {
      let counter = 0;
      let chainArr = chainMaker.chain.split("");
      let result = '';

      for (let i = 0; i < chainArr.length; i++) {
        if (chainArr[i] === '(') {
          counter +=1;
          // console.log("i in arr ", i);
          // console.log("counter === ", counter);
          if (counter === position) {
            // console.log("position!");
            if (position === numOfLinks) {
              result = chainMaker.chain.substr(0, i-2);
            } else {
              let end = i;
              while (chainMaker.chain.substr(end, 2) != "~~") {
                end += 1;
              }
              if (position === 1) {
                result = chainMaker.chain.substr(end + 2);
              } else {
                result = chainMaker.chain.substr(0, i) + chainMaker.chain.substr(end + 2);
              }             
            }
            break;
          } else {
            i += (chainArr.slice(i + 1).indexOf('~')) + 2;
          }
        }
      }
      

      chainMaker.chain = result;
      chainMaker.numOfLinks -= 1;
      return chainMaker;      
    }
    chainMaker.chain = '';
    chainMaker.numOfLinks = 0;
    throw new Error;
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    let result = chainMaker.chain.split("~~").reverse().join("~~");
    chainMaker.chain = result;
    return chainMaker;  
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    result = chainMaker.chain;
    chainMaker.chain = '';
    chainMaker.numOfLinks = 0;
    return result;
  }
};


module.exports = chainMaker;
