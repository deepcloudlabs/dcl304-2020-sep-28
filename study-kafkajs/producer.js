const {Kafka} = require('kafkajs')

const kafka = new Kafka({
    clientId: "market-producer",
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

producer.connect()
        .then( () => {
            setInterval( () => {
                let price = Math.random() * 10 + 100. ;
                let stock = {
                  symbol: "msft",
                  price: price
                };
                let payload = {
                   topic: "market",
                   messages: [
                       {key: "msft", value: JSON.stringify(stock)}
                   ]
                } ;
                producer.send(payload);
            } , 1000);
        }).catch( err => console.log(err));

