// const userName = "Ronnie";
// userName = "Ronald";
// let age = 24;

// age = 30;

//arrow functions
//set default value for parameters
// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector("btton");

// if (button) {
//   button.addEventListener("click", event => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Ronnie",
  age: 24,
};

//coping pointer
//const copiedPerson = person;
const copiedPerson = { ...person };

// have a funciton that can have any number of parameters, the push method for arrays works like this.
const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// can do the same with tuple type parameters
const addTuple = (...numbers: [number, number, number]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  });
};

console.log(addTuple(1, 2, 3));
// console.log(addTuple(1, 2, 3, 4));  // Gives you an error for not the right amount of parameters

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
//OR
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;
console.log(userName, age);
