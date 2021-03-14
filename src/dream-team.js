const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(!Array.isArray(members)) return false;

  let word;
  let dTeam = [];
  
  members.forEach(item => {

    if(typeof item == 'string') {
    word = item.replace(/\s+/g, '').charAt();
    dTeam.push(word.toUpperCase());
    }
  });
  return dTeam.sort().join('');
};

