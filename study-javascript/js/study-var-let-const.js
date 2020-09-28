// let, const => ES6
// var
function fun() {
   u = 42;
   return u+1;
}
fun(); // u is created in window object
window.u // 42
function gun() {
    let v = 42;
    return v+1;
}
gun(); // v is created when gun() is called,
       // then destroyed after returning gun() call
// v does not exist!
// prefer let over var
for (let i=0;i<10;i++)
    for (let j=0;j<10;j++)
        console.log(i+","+j)

// var -> let -> const