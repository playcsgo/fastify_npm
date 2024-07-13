// ESM import
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true,
  jsonShorthand: false // for data validate by JsonSchema
})


// register plugins
import dbConnector from './our-db-connector.js'
import firstRoute from './our-first-route.js'


fastify.register(dbConnector)
fastify.register(firstRoute)



// Run the server! '0.0.0.0' or :: for all IPV6
fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`server running on ${address}`)
})