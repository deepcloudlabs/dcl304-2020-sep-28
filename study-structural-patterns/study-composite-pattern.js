let Node = function (name) {
    this.children = [];
    this.name = name;
}

Node.prototype = {
    add: function (child) {
        this.children.push(child);
    },

    remove: function (child) {
        let length = this.children.length;
        for (let i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },

    getChild: function (i) {
        return this.children[i];
    },

    hasChildren: function () {
        return this.children.length > 0;
    }
}

// recursively traverse a (sub)tree

function traverse(indent, node) {
    log.add(Array(indent++).join("--") + node.name);

    for (let i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}

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
    let tree = new Node("root");
    let left = new Node("left")
    let right = new Node("right");
    let leftleft = new Node("leftleft");
    let leftright = new Node("leftright");
    let rightleft = new Node("rightleft");
    let rightright = new Node("rightright");

    tree.add(left);
    tree.add(right);
    tree.remove(right);  // note: remove
    tree.add(right);

    left.add(leftleft);
    left.add(leftright);

    right.add(rightleft);
    right.add(rightright);

    traverse(1, tree);

    log.show();
}

run();