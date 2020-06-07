'use strict'

const amqp = require('amqplib')
const queue = process.env.QUEUE || 'usuarios_queue'

const usuario = require('../model/usuario');

async function subscriberUsuario() {
    const connection = await amqp.connect('amqp://localhost')
    const channel = await connection.createChannel()

    await channel.assertQueue(queue)

    channel.consume(queue, (message) => {
        const content = JSON.parse(message.content.toString())

        console.log(`Received message from "${queue}" usuarios_queue`)

        usuario.deleteUsuarioKudos(content);

        channel.ack(message)
    })
}

subscriberUsuario().catch((error) => {
    console.error(error)
    process.exit(1)
})

exports.subscriberUsuario = subscriberUsuario;