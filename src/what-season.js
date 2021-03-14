const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(arguments.length === 0){
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('Error');
  }
  try {
    date.valueOf()
  } catch (e) {
    throw new Error(e)
  }
  let season = date.getMonth();
  if(season >= 2 && season <= 4){
  return 'spring';
  }       
  else if(season >= 5 && season <= 7){
    return 'summer';
  }    
  else if(season >= 8 && season <= 10){
    return 'autumn';
  }              
  else 
  return 'winter';
};