let fetch = require("node-fetch");

setInterval(() => {
    fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
        .then(response => response.json())
        .then(ticker => console.log(ticker))
        .catch(err => console.error(err));
}, 3000)
