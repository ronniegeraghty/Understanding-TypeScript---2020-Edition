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
