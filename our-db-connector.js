//db connector

import fastifyPlugin from 'fastify-plugin'
import fastifyMongodb from '@fastify/mongodb'
import 'dotenv/config'

async function dbConnector (fastify, options) {
  fastify.register(fastifyMongodb, {
    url: process.env.MONGODB_URI
  })
}

export default fastifyPlugin(dbConnector)