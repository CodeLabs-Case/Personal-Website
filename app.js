const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const mongo = require('mongodb')



const app = express()



// This is needed to link/serve the styles and scripts, see their tags in the html.
app.use('/static', express.static('public'));



// Connect to the routes directory
app.use(require('./routes'))



// I have set the port to 8080 in AWS and that is what is read into this variable and used.
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
    res.sendFile(path.join(__dirname + 'z/views/index.html'))
})

// Put

// Post

// Delete