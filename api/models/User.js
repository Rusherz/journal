const {
    Model,
    Schema
} = require('mongoose')
const crypto = require('crypto')
const model = require('mongoose').model

const schema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date().toISOString()
    },
    updatedAt: {
        type: Date,
        default: new Date().toISOString()
    }
})

class UserClass extends Model {
    // `fullName` becomes a virtual
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(newFullName) {
        const firstSpace = newFullName.indexOf(' ')
        this.firstName = newFullName.split(' ')[0]
        this.lastName = firstSpace === -1 ? '' : newFullName.substr(firstSpace + 1)
    }

    // `getFullName()` becomes a document method
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    // `findByFullName()` becomes a static
    static findByFullName(name) {
        const firstSpace = name.indexOf(' ')
        const firstName = name.split(' ')[0]
        const lastName = firstSpace === -1 ? '' : name.substr(firstSpace + 1)
        return this.findOne({
            firstName,
            lastName
        })
    }

    async Save(inital = false) {
        if (inital) {
            this.password = crypto.createHmac('sha256', 'jmir123!!!!!!')
                .update(this.password)
                .digest('hex')
        }

        return super.save()
    }
}

// schema.plugin((schema, options) => {
//     schema.pre('save', next => {
//         console.log('here', next.firstName)
//         next()
//     })
// })

schema.loadClass(UserClass)

module.exports = model('User', schema)