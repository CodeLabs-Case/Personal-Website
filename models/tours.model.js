// General code across all schemas
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const toursSchema = new Schema({
    label: {
        type: String,
        require: true
    },
    y: {
        type: Number,
        required: true
    }
})


// Export the model so that you can require it in the routes directory
const Tours = mongoose.model('Tours', toursSchema)
module.exports = Tours