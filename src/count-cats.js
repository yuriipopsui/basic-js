const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

    let counter=0;
    for(let arr of matrix){
    for(let item of arr){
      if(item === '^^'){
        counter++;
      }
    }
  }
  return counter;
};
