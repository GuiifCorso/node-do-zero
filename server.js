import { fastify } from 'fastify'
// import { DatabaseMemory } from './database.js'
import { DatabasePostgress } from './database-postgres.js'

const server = fastify()

const database = new DatabasePostgress()

// Request Body
// POST http://localhost:3333/videos -> Rota para postagem de vídeos

server.post('/videos', async (request, reply) => {{
    const { title, description, duration } = request.body

    await database.create({
        title: title,
        description: description,
        duration: duration,
    })

    return reply.status(201).send()
}})

server.get('/videos', async (request) => {
    const search = request.query.search

    const videos = await database.list(search)

    return videos
})

//Route Parameter (:id) -> É preciso enviar um parâmetro para acessar. Nesse caso, o ID

server.put('/videos/:id', async (request, reply) => {
    const videoID = request.params.id
    const { title, description, duration } = request.body
    await database.update(videoID, {
            title: title,
            description: description,
            duration: duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', async (request, reply) => {
    const videoID = request.params.id

    await database.delete(videoID)

    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})