"user strict";

class UserStorage {
  static #user = {
    id:["seo", "chang", "hyun"],
    pw:["123","1234","12345"],
    name:["서", "창", "현"],
  };

  static getUsers(...fields) {
    const users =  this.#user;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers; 
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;