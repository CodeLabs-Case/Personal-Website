const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const mongo = require('mongodb')

require('dotenv').config()



const app = express()



// Just in case you will need cross resource sharing
app.use('cors')
app.use(express.json())



// This is needed to link/serve the styles and scripts, see their tags in the html.
app.use('/static', express.static('public'));



// Connect to the routes directory
app.use(require('./routes'))



// Set up the connection to the MongoDB Atlas instance using Mongoose
// const uri = process.env.Atlas_URI
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
// const connection = mongoose.connection
// connection.once('open', ()=>{
//     console.log('Mongoose database connection established')s
// })



// I have set the port to 8080 as an Environment Variable in AWS and that is what is read into this variable and used.
const port = process.env.port ||  3000



app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is live")
})



// Temporary routes location
// Get
app.get('/', (req, res, err)=>{
    if(err){
        console.log(err)
    }
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

// Put

// Post

// Delete