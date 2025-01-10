// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Oi 2')

//     return response.end()
// })

// server.listen(3333)

// Utilizando a biblioteca Fastify

import { fastify } from 'fastify'

const server = fastify()

// Criação de uma rota. Método GET -> Buscas
server.get('/', () => {
    return 'Hello world'
})

server.get('/hello', () => {
    return 'Hello Guilherme!'
})

server.get('/node', () => {
    return 'Hello Node.js'
})

server.listen({
    port: 3333,
})