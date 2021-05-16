const express = require('express')
const path = require('path')
// const mongoose = require('mongoose')
// const mongo = require('mongodb')
// const cors = require('cors')

// require('dotenv').config()



// Because dotenv won't work in the production code and will make the server not run, check to make sure ...
// ... that you are in the development version
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const stripSecretKey = process.env.STRIPE_SECRET_KEY
const stripPublicKey = process.env.STRIPE_PUBLIC_KEY



const app = express()



// This is the new way of parseing JSON instead of using body-parser
// app.use(express.json());
// This is the old way of parseing JSON with body-parser
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



// This is needed to link/serve the styles and scripts, see their tags in the html.
app.use('/static', express.static('public'));



// ABSTRACTED NETWORKING FUNCTIONALITY
// This is socket.io which abstracts the networking functionality of the site to make it easier to ...
// ... work with, it is akin to what mongoose is for mongodb
// var http = require('http').Server(app)
// var io = require('socket.io')(http)
// io.on('connection', ()=>{
//     console.log('User is connected')
// })



// CROSS ORIGIN RESOURCE SHARING FUNCTIONALITY
// Just in case you will need cross resource sharing
// app.use('cors')
// app.use(express.json())



// REMOTE DATABASE FUNTIONALITY
// Set up the connection to the MongoDB Atlas instance using Mongoose
// const uri = process.env.ATLAS_URI
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
// const connection = mongoose.connection
// connection.once('open', ()=>{
//     console.log('Mongoose database connection established')
// })



// Connect to the routes directory
app.use(require('./routes'))



// I have set the port to 8080 as an Environment Variable in AWS and that is what is read into this variable and used.
const port = process.env.port ||  3000



app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is live")
})