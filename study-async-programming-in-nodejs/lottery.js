const port = 8100
let express = require("express");
let lottery = require("lottery");

let app = express();
/**
 *
 * @param max
 * @param size
 * @returns an array of distinct @size numbers between 1..max
 */
let draw2 = (max, size) => {
    return new Promise((resolve, reject) => {
        let numbers = [];
        while (numbers.length < size) {
            let number = Math.floor(Math.random() * max) + 1;
            if (!numbers.includes(number))
                numbers.push(number);
        }
        setTimeout(() => resolve(numbers), 3000);
    });
}

// http://localhost:8100/lottery/numbers?max=49&size=6
// max, size <- query parameter
app.get("/lottery/numbers", async (req, res) => {
    res.set("Content-Type", "application/json");
    let max = req.query.max;
    let size = req.query.size;
    let numbers = await lottery.draw(max, size);
    numbers.sort((x, y) => y - x);
    res.status(200).send(JSON.stringify(numbers));
})

app.get("/lottery/numbers2", (req, res) => {
    res.set("Content-Type", "application/json");
    let max = req.query.max;
    let size = req.query.size;
    draw2(max, size).then(numbers => {
        numbers.sort((x, y) => y - x);
        res.status(200).send(JSON.stringify(numbers));
    })
})

let service = app.listen(port)
console.log(`Server is running at port (${port})`);