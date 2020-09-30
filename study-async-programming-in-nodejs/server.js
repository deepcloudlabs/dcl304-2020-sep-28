let fetch = require("node-fetch");
let WebSocket = require("ws");

// async: setInterval -> event triggered (timeout event), fetch
setInterval(() => {
    // http
    fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
        .then(response => response.json())
        .then(ticker => console.log(ticker))
        .catch(err => console.error(err));
}, 10000)

// websocket -> HTML5 API -> (Near) Real-time Web Programming
let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
ws.on('message', frame => {
    let trade = JSON.parse(frame);
    console.log(trade);
})

