class UserController {
  constructor(userService) {
     
  }
  async getUser(id) {
    const user = await this.userService.getUser(id);
    return user;
  }
}

class UserService {
  async getUser(id) {
    return {
      id,
      name: 'John Doe'
    };
  }
}

module.exports = {UserController, UserService}; // Path: usercontroller.js

