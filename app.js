const express = require('express')
const mongo = require('mongodb')



const app = express()


const port = process.env.port ||  3000



app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is live")
})

// Temporary routes
// Get
app.get('/', (req, res, err)=>{
    if(err){
        console.log(err)
    }
    res.send('Home')
})

// Put

// Post

// Delete