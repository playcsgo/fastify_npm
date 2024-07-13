// our first-route.js

async function routes (fastify, options) {

  const collection = fastify.mongo.db.collection('test_collection')

  fastify.get('/', async(req, res) => {
    return { hello: 'world' }
  })

  fastify.get('/animals', async (req, res) => {
    const result = await collection.find().toArray()

    if (result.length === 0) throw new Error('data Not Found')

    return result
  })

  fastify.get('/animals/:animal', async (req, res) => {
    const animal = req.params.animal
    const result = await collection.findOne({ animal })

    if (!result) throw new Error('data Not Found')

    return result
  })

  // JsonSchema setting
  const animalBodyJsonSchema = {
    type: 'object',
    required: ['animal'],
    properties: {
      animal: { type: 'string' }
    },
  }

  const schema = {
    body: animalBodyJsonSchema,
  }

  
  fastify.post('/animals', { schema }, async (req, res) => {
    console.log('get POST')
    const animal = req.body.animal
    const result = await collection.insertOne({ animal })

    return result
  })
}


// export default routes
// module.exports = { routes }
// module.exports = routes

export default routes
