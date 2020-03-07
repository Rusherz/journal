const fastify = require('fastify')()
const mongoose = require('mongoose')

mongoose.plugin((schema, options) => {
    schema.pre('save', function (next) {
        if (this.updatedAt != undefined) {
            this.updatedAt = new Date().toISOString()
        }

        next()
    })
})

mongoose.connect('mongodb://server:tahamidsucks@mongo:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const User = require('./models/User')

fastify.register(require('fastify-cors'))
fastify.register(require('fastify-formbody'))

fastify.get('/v1/users', async (req, res) => {
    let user = await User.findOne().then(user => {
        return user
    })

    res.send({
        true: true
    })
})

fastify.post('/v1/users', async (req, res) => {
    let user = req.body

    user = new User(user)

    user = await user.Save(true)

    console.log(user)

    res.send({
        true: true
    })
})

fastify.listen(1337, '0.0.0.0', (error) => {
    console.log(error)
})