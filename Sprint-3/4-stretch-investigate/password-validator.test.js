/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

const isValidPassword = require("./password-validator");

const passwords = ["Hello1!"];

test("password is valid", () => {
  const password = "World2#";
  const result = isValidPassword(password, passwords);
  expect(result).toEqual(true);
});

test("password is too short", () => {
  expect(isValidPassword("Ab1!", passwords)).toEqual(false);
});

test("password has no uppercase letter", () => {
  expect(isValidPassword("hello1!", passwords)).toEqual(false);
});

test("password has no lowercase letter", () => {
  expect(isValidPassword("HELLO1!", passwords)).toEqual(false);
});

test("password has no number", () => {
  expect(isValidPassword("Hello!", passwords)).toEqual(false);
});

test("password has no symbol", () => {
  expect(isValidPassword("Hello12", passwords)).toEqual(false);
});

test("password was used before", () => {
  expect(isValidPassword("Hello1!", passwords)).toEqual(false);
});
