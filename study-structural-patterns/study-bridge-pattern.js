// input devices
let Gestures = function (output) {
    this.output = output;

    this.tap = function () {
        this.output.click();
    }
    this.swipe = function () {
        this.output.move();
    }
    this.pan = function () {
        this.output.drag();
    }
    this.pinch = function () {
        this.output.zoom();
    }
};

let Mouse = function (output) {
    this.output = output;

    this.click = function () {
        this.output.click();
    }
    this.move = function () {
        this.output.move();
    }
    this.down = function () {
        this.output.drag();
    }
    this.wheel = function () {
        this.output.zoom();
    }
};

// output devices

let Screen = function () {
    this.click = function () {
        log.add("Screen select");
    }
    this.move = function () {
        log.add("Screen move");
    }
    this.drag = function () {
        log.add("Screen drag");
    }
    this.zoom = function () {
        log.add("Screen zoom in");
    }
};

let Audio = function () {
    this.click = function () {
        log.add("Sound oink");
    }
    this.move = function () {
        log.add("Sound waves");
    }
    this.drag = function () {
        log.add("Sound screetch");
    }
    this.zoom = function () {
        log.add("Sound volume up");
    }
};

// logging helper

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

    let screen = new Screen();
    let audio = new Audio();

    let hand = new Gestures(screen);
    let mouse = new Mouse(audio);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();

    log.show();
}

run();