const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
    let transform = [];
    if(!Array.isArray(arr)){
      throw new Error('Error');
    }
    if(arr.length === 0){
      return [];
    }
    
    transform  = arr.filter(value => 
      value == '--discard-next' || 
      value == '--discard-prev' || 
      value == '--double-prev' || 
      value == '--double-next'
    );
    if (transform.length == 0) {
      return arr;
    }

    transform =[];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'string') {
        switch(arr[i]) {
          case '--discard-next': 
            if (arr[i+1] ===undefined) {
              break;
            }
            i++;
            break;
  
          case '--discard-prev': 
            if (arr[i-1] ===undefined) {
              break;
            }
            if (arr[i - 2] != '--discard-next') {
            transform.pop(); 
            }
            break;
  
          case '--double-next': 
            if (arr[i+1] === undefined) {
              break;
            }
            transform.push(arr[i+1]);
            break;
          
          case '--double-prev':
            if (arr[i-1] === undefined) {
              break;
            }
            if (arr[i - 2] !== '--discard-next') {
              transform.push(arr[i-1]); 
            }
            break;
          
          default: transform.push(arr[i]); 
        }
      } 
      else {
        transform.push(arr[i]);
      }
    }
  return transform;  
};
