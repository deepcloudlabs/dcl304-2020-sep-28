/*
let draw = function(){
    let numbers = new Set();
    while (numbers.size < 6){
         numbers.add(Math.floor(Math.random() * 49) + 1);
    }
    let array = Array.from(numbers);
    array.sort((x,y)=>x-y);
    return array;
}
 */
let draw = function (id) { // async
    return new Promise((resolve, reject) => {
        let numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 49) + 1);
        }
        let array = Array.from(numbers);
        array.sort((x, y) => x - y);
        if (Math.random() > 0.5) {
            reject("Cannot find distinct six numbers between 1 and 49")
        } else {
            setTimeout(() => {
                console.log(`Resolving from ${id}`);
                resolve(array);
            }, 1000 + Math.floor(Math.random() * 3000));
        }
    });
}
//function gun() {}
// sync: console.log(draw())
for (let i = 1; i <= 10; ++i)
    draw(i).then((numbers) => console.log(numbers))
        .catch((err) => console.error(err))
console.log("for loop has ended!")