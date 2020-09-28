// 1. how to define functions
var sun = function (x=1, y=2, z=3) { // ES6
    /*
    x = x || 1;
    y = y || 2;
    z = z || 3;
    /*
    if (arguments.length < 3) // defensive programming
        throw "You must provide three parameters!";

*/
    for (var i in arguments)
        console.log(`Argument ${Number(i) + 1}: ${arguments[i]}`); // ES6
    return x * y + z;
}

function run() {
    var sum = 0;
    for (var arg of arguments) {
        sum += Number(arg);
    }
    return sum;
}

// 2. Parameters
console.log(sun()); // sun(1,2,3)  -> 5
console.log(sun(2)); // sun(2,2,3)  -> 7
console.log(sun(2, 3)); // sun(2,3,3)  -> 9
console.log(sun(2, 3, 4));// sun(2,3,4)  -> 10
console.log(sun(2, 3, 4, 5, 6, 7, 8)); // sun(2,3,4)  -> 10

console.log(run(1, 2, 3, 4, 5, 6, 7, 8));
