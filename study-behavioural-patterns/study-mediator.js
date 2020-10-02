class Participant {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send = (message, to) => {
        this.chatroom.send(message, this, to);
    }

    receive = (message, from) => {
        log.add(from.name + " to " + this.name + ": " + message);
    }
}

class Chatroom {
    constructor() {
        this.participants = {};
    }

    register = (participant) => {
        this.participants[participant.name] = participant;
        participant.chatroom = this;
    }

    send = (message, from, to) => {
        if (to) {                      // single message
            to.receive(message, from);
        } else {                       // broadcast message
            for (let key in this.participants) {
                if (this.participants[key] !== from) {
                    this.participants[key].receive(message, from);
                }
            }
        }
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
    let jack = new Participant("Jack");
    let kate = new Participant("Kate");
    let james = new Participant("James");
    let jin = new Participant("Jin");

    let chatroom = new Chatroom();
    chatroom.register(jack);
    chatroom.register(kate);
    chatroom.register(james);
    chatroom.register(jin);

    kate.send("All you need is love.");
    kate.send("I love you John.");
    jack.send("Hey, no need to broadcast", kate);
    james.send("Ha, I heard that!");
    jin.send("James, what do you think?", james);

    log.show();
}

run();