let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Ronnie";
//need an extra type check to set an unknown to a variable with a set type
//better than any type because if forces you to make the type check
if (typeof userInput === "string") {
  userName = userInput;
}
//will never return anything because it will always throw an error and
//crash the script before the function can return something.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured!", 500);
