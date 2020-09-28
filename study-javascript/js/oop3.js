class Employee {
    constructor(identity, fullname) {
        this.identity = identity;
        this.fullname = fullname;
        // this.sayHello = this.sayHello.bind(this);
    }

    sayHello = () => { // lambda expression -> bind(this)
        console.log("Hello, " + this.fullname + "!")
    }
}
window.fullname = "kate austen";
jack = new Employee("1", "jack shephard");
// jack.sayHello();
window.setTimeout(jack.sayHello, 2000)