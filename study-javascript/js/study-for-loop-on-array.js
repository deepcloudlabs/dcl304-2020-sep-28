let numbers = [4, 8, 15, 16, 23, 42]
numbers[100]= 100
let lastIndex = numbers.length - 1;
for (let i in numbers) { // 0,1,2,3,4,5,100
    if (i < lastIndex) { // at the last element
        console.log(`${i}th element is ${numbers[i]}`);
        continue;
    }
    console.log(`The last element is ${numbers[i]}`);
}
for (let i in numbers) {
    if (i%2 == 0) continue;
    // NOT undefined
}
for (let i = 0; i < lastIndex; i+=2){
    if (numbers[i]){ // not undefined

    }
}

for (let i = 0; i < lastIndex; ++i)
    console.log(`${i}th element is ${numbers[i]}`);
console.log(`The last element is ${numbers[lastIndex]}`);

let processArray = function (arr, fn, last_fn = fn) {
    let lastIndex = arr.length - 1;
    for (let i = 0; i < lastIndex; ++i)
        fn(i,arr[i]);
    last_fn(lastIndex,arr[lastIndex]);
}

Array.prototype.process = function(fn, last_fn = fn){
    let lastElementIndex = this.length - 1;
    this.forEach((element, index, array) => {
        if (index < lastElementIndex)
            fn(index,element);
        else
            last_fn(index,element);
    });
}

processArray(numbers, (i,e) => console.log(`${i}th element is ${e}`),
    (i,e)=> console.log(`The last element is ${e}`))

numbers.process((i,e) => console.log(`${i}th element is ${e}`),
    (i,e)=> console.log(`The last element is ${e}`))