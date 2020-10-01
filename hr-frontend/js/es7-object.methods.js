// ES7: new methods in Object class
let jack = {
    identity: "1111111110",
    fullname: "jack bauer",
    salary: 100000,
    birthYear: 1956,
    iban: "TR1"
};
console.log("Keys are")
Object.keys(jack).forEach(console.log)
console.log("Values are")
Object.values(jack).forEach(console.log)
console.log("Entries are")
Object.entries(jack).forEach( entry => console.log(`${entry[0]}: ${entry[1]}`))

