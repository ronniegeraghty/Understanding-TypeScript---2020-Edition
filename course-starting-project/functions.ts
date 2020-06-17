// function add(n1: number, n2: number):number {
// to state the return type but its better to let typescript infer this
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
//combineValues can be set to any function that takes two number
//and returns a number

combineValues = add;
// combineValues = printResult; // Error on function type.

console.log(combineValues(8, 8));

addAndHandle(10, 20, result => {
  console.log(result);
});
