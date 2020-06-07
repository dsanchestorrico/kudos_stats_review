'use strict'

const amqp = require('amqplib')
const queue = process.env.QUEUE || 'kudos_queue'

const usuario = require('../model/usuario');

async function subscriber() {
    const connection = await amqp.connect('amqp://localhost')
    const channel = await connection.createChannel()

    await channel.assertQueue(queue)

    channel.consume(queue, (message) => {
        const content = JSON.parse(message.content.toString())

        console.log(`Received message from "${queue}" kudos_queue`)
        console.log(content)

        usuario.updateQtyKudos(content);

        channel.ack(message)
    })
}

subscriber().catch((error) => {
    console.error(error)
    process.exit(1)
})

exports.subscriber = subscriber;