type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text"; // literal type: result conversion has to be one of those strings
//Type aliases can be used to "create" your own types.
//You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  // union type (number | string)
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
