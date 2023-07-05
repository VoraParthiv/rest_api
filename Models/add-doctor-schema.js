const mongoose = require('mongoose')
const user = mongoose.Schema

const product = new user({
    name: ({
        type: String
    }),
    email: ({
        type: String
    }),
    password: ({
        type: String
    })
})

const model = mongoose.model('doctor', product)
module.exports = model