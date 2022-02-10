const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    companyName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        default: null
    },
    role: {
        type: String,
        default: 'admin'
    },
    nickname: {
        type: String,
        default: 'admin'
    }
})
const userModel = mongoose.model('Company', UserSchema)
module.exports = userModel