var Circle = function (x, y, radius) { // factory method -> constructor
    var self = this; // self is NOT a keyword! self has NO special meaning!
    self.x = x;
    self.y = y;
    self.radius = radius;
    self.area = function () {
        return Math.PI * self.radius * self.radius;
    }
    // return this;
}

c1 = new Circle(0, 0, 100);
console.log("Area: " + c1.area());
console.log(c1)
console.log(c1.x)
console.log(c1.y)
console.log(c1.radius)
for (var prop in c1){ // reflection
    console.log(prop + ": "+c1[prop]);
}