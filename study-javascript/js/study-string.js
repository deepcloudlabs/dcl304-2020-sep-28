const names = ["jack", "kate","james", "ben", "jin", "sun", "hugo"]
let upper_names = names.map( name => name.toUpperCase())
console.log(names)
console.log(upper_names)
let s = "\ud834\udd1e" // 4B ? symbol : unicode=> utf-8, utf-16
console.log(s)
let t = "\u20ba"
console.log(t)
let name = "jack";
for (let i=0;i<name.length;++i){
    let c = name.charAt(i);
    console.log(c)
}
console.log("\ud834\udd1e".charCodeAt(0))
console.log("\ud834\udd1e".charCodeAt(1))
console.log("\ud834\udd1e".charAt(0))
console.log("\ud834\udd1e".charAt(1))
let meyveler = [
    "elma", "armut", "kiraz", "karpuz",
    "kavun", "muz"
]
// . -> any character
// + -> at least one
// * -> any number of : 0,1,2,3,...
// ? -> at most one a? -> a, ""
// "^k.*z$": "kz", "kaz"
// "^[a-m]{5}$" -> abcdef
// "^[0-9]{11}$"
let pattern1 = new RegExp("^k.*z$")
for (let meyve of meyveler)
    if (pattern1.test(meyve))
        console.log(meyve)
console.log("5-char fruits:")
let pattern2 = new RegExp("^[a-z]{5}$")
for (let meyve of meyveler)
    if (pattern2.test(meyve))
        console.log(meyve)
