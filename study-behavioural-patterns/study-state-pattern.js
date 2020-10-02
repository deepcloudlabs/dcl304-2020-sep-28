let TrafficLight = function () {
    let count = 0;
    let currentState = new Red(this);

    this.change = function (state) {
        // limits number of changes
        if (count++ >= 10) return;
        currentState = state;
        currentState.go();
    };

    this.start = function () {
        currentState.go();
    };
}

let Red = function (light) {
    this.light = light;

    this.go = function () {
        log.add("Red --> for 1 minute");
        light.change(new Green(light));
    }
};

let Yellow = function (light) {
    this.light = light;

    this.go = function () {
        log.add("Yellow --> for 10 seconds");
        light.change(new Red(light));
    }
};

let Green = function (light) {
    this.light = light;

    this.go = function () {
        log.add("Green --> for 1 minute");
        light.change(new Yellow(light));
    }
};

// log helper

let log = (function () {
    let log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function run() {
    let light = new TrafficLight();
    light.start();

    log.show();
}