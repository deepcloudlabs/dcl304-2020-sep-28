let fetch = require("node-fetch");
let WebSocket = require("ws");

// async: setInterval -> event triggered (timeout event), fetch
setInterval(() => { // observer method -> callback method
    // http
    fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
        .then(response => response.json())
        .then(ticker => console.log(ticker)) // observer/callback method
        .catch(err => console.error(err));
}, 10000)

// websocket -> HTML5 API -> (Near) Real-time Web Programming
let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
ws.on('message', frame => { // observer method -> callback method
    let trade = JSON.parse(frame);
    let {p, q, s, T, ...rest} = trade;
    let model = {p,q,s,T, v: Number(p) * Number(q)}
    /*
    {e: 'trade', E: 1601449136944, s: 'BTCUSDT', t: 425501402, p: '10717.72000000',
        q: '0.00111100', b: 3300321950, a: 3300321908, T: 1601449136943,
        m: false, M: true
    }
    */
    console.log(model);
})

