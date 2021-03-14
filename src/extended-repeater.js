const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {

let {
    repeatTimes=1,
    separator="+",
    addition="",
    additionRepeatTimes=1,
    additionSeparator="|"
    } = options;

  let baseString=String(str);
  let addString=String(addition);
  let arrAddition=[];  
  let arrString=[];
  let addedString='';   

for (let i=0; i<additionRepeatTimes; i++) {
    arrAddition.push(addString);
  }

  addedString = arrAddition.join(additionSeparator);

  for (let i=0; i<repeatTimes; i++) {
    arrString.push(baseString + addedString);
  }
  return arrString.join(separator);
};

