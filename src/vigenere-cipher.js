const CustomError = require("../extensions/custom-error");



const TABLE = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3,
  'E': 4,
  'F': 5,
  'G': 6,
  'H': 7,
  'I': 8,
  'J': 9,
  'K': 10,
  'L': 11,
  'M': 12,
  'N': 13,
  'O': 14,
  'P': 15,
  'Q': 16,
  'R': 17,
  'S': 18,
  'T': 19,
  'U': 20,
  'V': 21,
  'W': 22,
  'X': 23,
  'Y': 24,
  'Z': 25,
}

class VigenereCipheringMachine {
  constructor(val = true) {
    this.isDirect = val;
  }



  encrypt(message, key) {
    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }

    if (message && key) {
      let encrypted = '';
      let multiKey = key.toUpperCase().repeat((message.length / key.length) + 1);
      message = message.toUpperCase();
      let encryptedCharCode;
      let shift = 0;
      for (let i = 0; i < message.length; i++) {
        // console.log(message.charAt(i));
        // console.log(TABLE[multiKey.charAt(i)] || multiKey.charAt(i));
        // ДОПИСАТь для не букв латинского алфавита. если нету в тейбл, тогда оставить как есть и сразу в энкриптед

        if (TABLE[message.charAt(i) ] == undefined) {
          shift += 1;
          encrypted += message[i];
        } else {
          encryptedCharCode = (TABLE[message.charAt(i)  ] + TABLE[multiKey.charAt(i  - shift )]) % 26;
          encrypted += getKeyByValue(TABLE, encryptedCharCode);
        }
      }
      // console.log(encrypted);
      if (this.isDirect) {
        return encrypted;
      } else {
        encrypted = encrypted.split('').reverse().join('');
        return encrypted;
      }
    }
    throw new Error;
  }

  decrypt(encryptedMessage, key) {
    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }
    if (encryptedMessage && key) {
      let decrypted = '';
      let multiKey = key.toUpperCase().repeat((encryptedMessage.length / key.length) + 1);
      encryptedMessage = encryptedMessage.toUpperCase();
      // console.log(encryptedMessage);
      // console.log(multiKey);
      let decryptedCharCode;
      let shift = 0;
      for (let i = 0; i < encryptedMessage.length; i++) {
        // console.log('from message  ', TABLE[encryptedMessage.charAt(i)] );
        // console.log('from multikey  ', TABLE[multiKey.charAt(i )] );
        // console.log(getKeyByValue(TABLE, decryptedCharCode));
        // console.log(getKeyByValue(TABLE, decryptedCharCode));
        if (TABLE[encryptedMessage.charAt(i) ] == undefined) {
          shift += 1;
          decrypted += encryptedMessage[i];
        } else {
          decryptedCharCode = (TABLE[encryptedMessage.charAt(i)] + 26 - TABLE[multiKey.charAt(i  - shift )]) % 26;
        //   encryptedCharCode = (TABLE[message.charAt(i)  ] + TABLE[multiKey.charAt(i  - shift )]) % 26;
          decrypted += getKeyByValue(TABLE, decryptedCharCode);
        }

      }
      // return decrypted;
      if (this.isDirect) {
        return decrypted;
      } else {
        decrypted = decrypted.split('').reverse().join('');
        return decrypted;
      }
    }
    throw new Error;    
    
  }
}

module.exports = VigenereCipheringMachine;
