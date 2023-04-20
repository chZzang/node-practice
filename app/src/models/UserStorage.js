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

  static getUserInfo(id){
    const users =  this.#user;
    const idx = users.id.indexOf(id);
    const userkeys = Object.keys(users);
    const userInfo = userkeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorage;