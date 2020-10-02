class Person {
    constructor(name, street, city, state) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
    }

    hydrate = () => {
        let memento = JSON.stringify(this);
        return memento;
    }

    dehydrate = (memento) => {
        let m = JSON.parse(memento);
        this.name = m.name;
        this.street = m.street;
        this.city = m.city;
        this.state = m.state;
    }
}


class CareTaker {
    constructor() {
        this.mementos = {};
    }

    add = (key, memento) => {
        this.mementos[key] = memento;
    }

    get = (key) => {
        return this.mementos[key];
    }
}

// log helper
let log = (function () {
    let log = "";

    return {
        add: function (msg) {
            log += msg + "\n";
        },
        show: function () {
            alert(log);
            log = "";
        }
    }
})();


function run() {
    let mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
    let john = new Person("John Wang", "48th Street", "San Jose", "CA");
    let caretaker = new CareTaker();

    // save state

    caretaker.add(1, mike.hydrate());
    caretaker.add(2, john.hydrate());

    // mess up their names

    mike.name = "King Kong";
    john.name = "Superman";

    // restore original state

    mike.dehydrate(caretaker.get(1));
    john.dehydrate(caretaker.get(2));

    log.add(mike.name);
    log.add(john.name);

    log.show();
}

run();