/* You could just make a custom type but interfaces 
are more strick and are more often used.
*/

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  /* You add an anonymous function and typescript understands that
  that the whole interface is for that funcition. */
  /*Here using a custom type is more common than an interface. */
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // The question mark makes the property optional
}

interface Greetable extends Named {
  // readonly makes it so that property can only be set once
  //readonly name: string;

  greet(phrase: string): void;
}

// implements means that this class has the things the interface requires
// you can implement more than one interface by listing them with commas between
// You can also have things that aren't specificed in the implemented interface
class Person implements Greetable {
  name?: string;
  age = 24;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;

user1 = new Person();
//Causes error because user1 is a Person that extends Greetable and name is readonly
// user1.name = "Ronaldo";

user1.greet("Hi there I am");
console.log(user1);

/*Interfaces don't translate to JavaScript when the TypeScript is compiled, 
so nothing related to them will be in the output js file */
