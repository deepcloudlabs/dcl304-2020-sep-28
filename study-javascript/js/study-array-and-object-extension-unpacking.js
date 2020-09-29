let numbers = [4, 8, 15, 16, 23, 42]
/*
let first = numbers[0]
let second = numbers[1]
let rest = numbers.splice(2)
 */
let [first, second, ...rest] = numbers

console.log(`first: ${first}`)
console.log(`second: ${second}`)
console.log(`rest: ${rest}`)
/*
numbers.push(68)
numbers.push(72)
numbers.push(96)
 */
let numbers2 = [...numbers, 68, 72, 96]
console.log(`numbers2: ${numbers2}`)

let jack = {identity: "1", firstname:"jack", lastname: "bauer", birthyear: 1956, salary: 100000}
/*
 let firstname = jack.firstname;
 let lastname = jack.lastname;
 let salary = jack.salary;
 let jack_rest = {}
 jack_rest.identity = jack.identity
 jack_rest.birthyear = jack.birthyear
 */
let {firstname, lastname, salary, ...jack_rest} = jack
console.log(`firstname: ${firstname}`)
console.log(`lastname: ${lastname}`)
console.log(`salary: ${salary}`)
console.log(jack_rest)

let jack2 = {...jack, email: "jack@example.com", department: "IT"}
console.log(jack2)

let x = 0
let y = 0
let radius = 100
let color = "Red"
/*
let circle = {}
circle.x = x
circle.y = y
circle.radius = radius
circle.color = color
 */
let circle = {x,y,radius,color} // {x:0,y:0,radius:100,color: "Red" }
console.log(circle)



