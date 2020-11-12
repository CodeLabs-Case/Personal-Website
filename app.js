const express = require('express')
const mongo = require('mongodb')
const path = require('path')



const app = express()



// app.use(express.static(__dirname + 'public'))
app.use('/static', express.static('public'));



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
app.get('/tours', (req, res, err)=>{
    if(err){
        console.log(err)
    }
    res.sendFile(path.join(__dirname + '/views/tours.html'))
})

// Put

// Post

// Delete