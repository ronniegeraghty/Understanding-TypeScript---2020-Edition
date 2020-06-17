//If the class has an abstract method in it, the class needs to be abstract as well
abstract class Department {
  static fiscalYear = 2020;
  //   private id: string;
  //   private name: string; //public is the default modifier
  protected employees: string[] = [];
  //protected is like private but it makes the variable also accessable within classes that extend the class it's declared in.

  constructor(protected readonly id: string, public name: string) {
    // With readyonly id can't be changed even from within the class.
    //if you include the private or public modifer in the parameters of the constructor you don't need to initialized the attributes
    // this.id = id;
    // this.name = n;
    //console.log(this.fiscalYear); // can't access static properties from non-static methods
    console.log(Department.fiscalYear); // This is how you access static properties from a non static method
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  // Abstract means that the classes that inhert from this class have to declare there own implementation of the method.
  //It also can no longer have an implementation
  abstract describe(this: Department): void;
  //says that the this in the function should be of type Department, you don't need to add a parameter when calling the function
  //console.log(`Department (${this.id}): ${this.name}`);

  addEmployee(employee: string) {
    //validation etc
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    // a getting must return something
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Ronnie") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Ronnie");
console.log("employee1", employee1);
console.log("Fiscal Year", Department.fiscalYear);

const it = new ITDepartment("d1", ["Ronnie"]);
it.addEmployee("Ronnie");
it.addEmployee("Sophie");

// accounting.employees[2] = "Anna"; //employees is now private so it can't be accessed this way.

it.printEmployeeInformation();
it.describe();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport); //doesn't need () after mostRecentReport

accounting.addEmployee("Ronnie");
accounting.addEmployee("Sophie");

// accounting.printReports();

// accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = {
//   name: "DUMMY",
//   describe: accounting.describe,
// };
// accountingCopy.describe();
