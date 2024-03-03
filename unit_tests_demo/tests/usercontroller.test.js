const {UserController} = require("../dependencydemo");

test("user controller", async () => {

    const userService = jest.mock();
    userService.getUser = jest.fn().mockResolvedValue({
        id: 1,
        name: 'John Doe'
    });

    const userController = new UserController(
        userService
    );

    const user = await userController.getUser(1);

    expect(user.id).toEqual(1);
    expect(user.name).toEqual('John Doe');
});