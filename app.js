//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                          //
// This project was a test to launch a simple application on AWS Elastic with an Express backend.                           //
// Everything works but when I try to retrieve data from the remote MongoDB instance it gives me a 504 Time Out.            //
// The connection is good, and everything is coded properly, this is probably a network configurarion issue.                //
// There is an alternate way that I have went because time was short when I wrote this, and that is to store a file ...     //
// ... within the project to act as a local database instance. This works for smaller projects.                             //
// I have kept the code for the MongoDB functionality for future reference however.                                         //
//                                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const express = require('express')
const path = require('path')
// const mongoose = require('mongoose')
// const mongo = require('mongodb')
// const cors = require('cors')

// require('dotenv').config()



const app = express()



// This is the new way of parseing JSON instead of using body-parser
// app.use(express.json());
// This is the old way of parseing JSON with body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



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