/* You could just make a custom type but interfaces 
are more strick and are more often used.
*/

interface Named {
  readonly name: string;
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
  name: string;
  age = 24;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Ronnie");
//Causes error because user1 is a Person that extends Greetable and name is readonly
// user1.name = "Ronaldo";

user1.greet("Hi there I am");
console.log(user1);
