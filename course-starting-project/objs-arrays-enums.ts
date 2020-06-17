// const person: { name: string; age: number } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Ronnie",
//   age: 24,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN, // = 0 // ADMIN=5 will make it start at 5, you can also assign any number for all the properties
  READ_ONLY, // = 1
  AUTHOR, // = 2
}

const person = {
  name: "Ronnie",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0,"admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hooby.map());
}

if (person.role === Role.AUTHOR) {
  console.log("is admin");
}
