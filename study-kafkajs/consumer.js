const {Kafka} = require('kafkajs')

const kafka = new Kafka({
    clientId: "market-consumer",
    brokers: ['localhost:9092']
});

const consumer = kafka.consumer({groupId: 'stockmarket-group'});

const read_stock_prices = async () => {
    await consumer.connect();
    await consumer.subscribe({topic: "market", fromBeginning: true});
    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            console.log(`Recieved message from (${topic},${partition}): {message.key}: ${message.value}`)
        }
    });
}

read_stock_prices()
      .catch( err => console.log(err));