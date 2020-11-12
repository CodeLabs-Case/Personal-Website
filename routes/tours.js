const router = require('express').Router()
const path = require('path')
const fs = require('fs')

let Tours = require('../models/tours.model')
const { json } = require('body-parser')



router.get('/', (req, res, err)=>{
    if(err){
        console.log(err)
    }

    // This is how I had to set the path to work in this seperate file.
    // However, EJS will be used in future so this may be temporary.
    res.sendFile(path.join('/var/app/current/views/tours.html'))
})


router.get('/all', (req, res, err)=>{
    if(err){
        console.log(err)
    }

    // Testing
    var contents = fs.readFileSync('../models/test.json');
    var jsonContent = JSON.parse(contents);
    res.send(jsonContent)

    // Tours.find({"y": 1919})
    // .then(tours => res.json(tours))
    // .catch(err => res.status(400).json('Error: ' + err))
})








module.exports = router