const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type){
    this.type = type;
  }
  encrypt(message, key) {
    
    if(arguments.length < 2){
      throw new Error("Error");
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    if(this.type === false){
      message = message.split("").reverse().join("");
    }
    let stringResult = "";
    let count = 0;
    for(let i = 0;i < message.length; i++){
      if(!/^([a-z])$/.test(message[i])){
        stringResult += message[i];
        continue;
      }
      let charCipher = (key.charCodeAt(count % key.length) - 97 + (message.charCodeAt(i) - 97)) % 26;
      stringResult += String.fromCharCode(charCipher + 97);
      count++;
    }
    stringResult = stringResult.toUpperCase();
    return stringResult;
  }    
  decrypt(message, key) {
    if(arguments.length < 2){
      throw new Error("Error");
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    if(this.type === false){
      message = message.split("").reverse().join("");
    }
    let stringResult = "";
    let count = 0;
    for(let i = 0; i < message.length; i++){
      if(!/^([a-z])$/.test(message[i])){
        stringResult += message[i];
        continue;
      }
      let charMessage = (message.charCodeAt(i) - 97 - (key.charCodeAt(count % key.length) - 97) + 26) % 26;
      stringResult += String.fromCharCode(charMessage + 97);
      count++;
    }
    stringResult = stringResult.toUpperCase();
    return stringResult;
  }
}

module.exports = VigenereCipheringMachine;
