const {Kafka} = require('kafkajs')

const kafka = new Kafka({
    clientId: "admin",
    brokers: ['localhost:9092']
})

const admin = kafka.admin()

create_topic = async (topic_name) => {
    await admin.createTopics({
        topics: [{topic: topic_name}]
    }).then(() => {
    })
        .catch(err => console.log(err));
    console.log(`Topic (${topic_name}) is created!`);
}

create_topic("market");