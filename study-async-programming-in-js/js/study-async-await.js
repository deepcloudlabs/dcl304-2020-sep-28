let draw = async function (id) { // async
    let numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 49) + 1);
    }
    let array = Array.from(numbers);
    array.sort((x, y) => x - y);
    if (Math.random() > 0.5) {
        throw "Cannot find distinct six numbers between 1 and 49";
    }
    console.log(`Returning from ${id}`);
    return array;
}

for (let i = 1; i <= 10; ++i)
    draw(i).then((numbers) => console.log(numbers))
        .catch((err) => console.error(err))
console.log("for loop has ended!")

async function fun() {
    let lotteryNumbers = await draw(1); // blocking
    let nums = await draw(2);
    draw(nums[0]).then((numbers) => console.log(numbers))

}

async function gun() {
    await fun()
}

async function run() {
    return await new Promise((resolve, reject) => setTimeout(()=>resolve(42), 10000));
}

run().then(x => console.log(x)); // async

console.log("End of life...")
