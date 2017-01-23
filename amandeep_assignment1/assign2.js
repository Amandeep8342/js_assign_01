const myVal = process.argv;


let array1 = [];// new array


array1.push(myVal[2]); // adding third value

console.log(array1);


array1.push(Number(myVal[2]));//converting 3rd value into numbers


array1.push(Number(myVal[3]));//convertion 4th value into number


let x = Number(myVal[2])+Number(myVal[3]);// sum of numbers
console.log(x)


