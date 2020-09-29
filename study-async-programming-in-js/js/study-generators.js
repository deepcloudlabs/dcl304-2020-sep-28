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

function* filter(items, fn) {
    for (let item of items) {
        if (fn(item))
            yield item;
    }
}

function* map(items, fn) {
    for (let item of items) {
        yield fn(item);
    }
}

numbers = [4, 8, 15, 16, 23, 42]
for (let num of map(filter(numbers, x => x%2 == 0), y => y* y))
    console.log(num)
