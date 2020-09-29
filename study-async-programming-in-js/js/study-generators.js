let draw2 = function () { // sync
    let numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 49) + 1);
    }
    let array = Array.from(numbers);
    array.sort((x, y) => x - y);
    return array;
}

function* draw() { // generator function
    for (let i = 0; i < 100; ++i) {
        let number = Math.floor(Math.random() * 49) + 1;
        console.log(`yielding ${number} from draw()`);
        yield number; // return -> yield
    }
}

for (let number of draw()) {
    console.log(`number: ${number}`);
}