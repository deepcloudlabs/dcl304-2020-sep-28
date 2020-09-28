numbers = [4, 8, 15, 16, 23, 42];

numbers = new Array(4, 8, 15, 16, 23, 42);

console.log(numbers.length)
console.log(numbers[0])
console.log(numbers[5])
console.log(numbers[6]) // undefined

arr = new Array(5) // [undefined, undefined,undefined, undefined,undefined]

const numbers = [4, 8, 15, 16, 23, 42];
numbers.push(54)
numbers.join(",")
// external while-loop
let i = 0;
while (i < numbers.length){
    console.log(numbers[i]);
    ++i;
}
// external do-while-loop
i = 0;
do {
    console.log(numbers[i]);
    ++i;
} while (i < numbers.length);
// external loop #1
for (let i = 0; i < numbers.length; ++i)
    console.log(numbers[i]);
// external loop #2
for (let i in numbers)
    console.log(numbers[i]);
// external loop #3
for (let number of numbers)
    console.log(number);
// internal loop
numbers.forEach( number => console.log(number))
