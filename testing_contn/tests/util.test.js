// const { getGithubUser, sum } = require("../hello");

// // test("testing util", () => {
// //   const username = "keenwarrior";
// //   expect(sum(2, 3)).resolves.toBe(5);
// // });

// test("demo mock fn", () => {
//     const mockFn = jest.fn((a, b)=>a+b);
//     mockFn.mockReturnValue(10);
//     expect(mockFn(2, 3)).toBe(10);
// });

// // test("demo mock object", () => {
// //     const mock = {
// //         name: "keen",
// //         age: 25
// //     };

// //     mock.sayHello = jest.fn(() => "hello");
    
// //     expect(mock.sayHello()).toBe("hello");
// // });

test("demo mock object", () => {
    const mockedSum = jest.mocked(sum);
    mockedSum.mockResolvedValue(5);
    expect(mockedSum(2, 3)).resolves.toBe(5);
});


