const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (typeof members != "undefined"  
      && members != null  
      && members.length != null  
      && members.length > 0) {
        let realMembers = [];
        for (let i = 0; i < members.length; i++) {
          if (typeof(members[i]) === 'string') {
            realMembers.push(members[i].toLowerCase().trim());
          }
        }

        realMembers.sort();
        let teamName = '';
        for (let j = 0; j < realMembers.length; j++) {
          teamName += realMembers[j][0].toUpperCase();
        }
        return teamName;  
    } else {
      return false;
    }
};
