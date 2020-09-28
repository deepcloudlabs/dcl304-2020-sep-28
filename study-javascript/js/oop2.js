class Circle { // ES6 Class Syntax -> Syntactic Sugar
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        // this.area = this.area.bind(this);
    }
    area = () => {
        return Math.PI * this.radius * this.radius;
    }
}

c1 = new Circle(0, 0, 100);
c2 = new Circle(1, 1, 200);
console.log("Area: " + c1.area());
Circle.prototype.color = "Red"
c3 = new Circle(2, 2, 300);
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c1.x)
console.log(c1.y)
console.log(c1.radius)
for (var prop in c1){ // reflection
    console.log(prop + ": "+c1[prop]);
}
