//Intersection types let us combine other types.
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // This is the intersection type

const e1: ElevatedEmployee = {
  name: "Ronnie",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Will only be numbers since that is the only type Combinable and Numeric have in common.

//Type Guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    //This line above is a type guard using typeof
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  //console.log('Privileges: ' + emp.privileges); // This line gives an error because the UnknowEmployee only has this property when its an Admin
  //Can check if the property exists for the employee
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Sophie", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading carpo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    //the line above finds out if vehicle was created using the Truck constructor function
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//Discriminated Union
// has one similar property (ex: type) between all objects or interfaces that tells what type of object it is.
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//Type Casting
//const paragraph = document.querySelector("p"); // TypeScript knows that paragraph will either be a <p> or null since we are querying for one.

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
//TypeScript only knows this is an HTML element but doesn't know what type.
// ! tells typescript the element wont be null
// Adding the <> before the document line lets you type cast the element by putting the type in between the <>

//OR
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement; //The "as" keyword tells TS that the document line will return the following type

//When you know the document line will always return something you can use the ! at the end to tell TS that it will never be null.
//If you're not sure if the value could be null or not you should use an if check as follows:
//You can also do you type casting in the if statement
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}
