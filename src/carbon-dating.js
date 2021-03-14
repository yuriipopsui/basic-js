const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== 'string'){
    return false;
  }
  else if(isNaN(sampleActivity)){
    return false;
  }
    let sample = Number(sampleActivity);
    if(sample<=0 || sample>MODERN_ACTIVITY){
      return false;
    }
    return Math.ceil(Math.log(MODERN_ACTIVITY/sample)/(0.693/HALF_LIFE_PERIOD));
};

