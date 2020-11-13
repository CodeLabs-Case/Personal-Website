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
    // If you are able to do store and operate on the data in this way then it will be the better option.
    // You will want to make another project where you connect to the mongodb instance so that you know how to ...
    // ... when you are working with Elastic.
    var contents = fs.readFileSync('/var/app/current/routes/database.json');
    var jsonContent = JSON.parse(contents);
    res.send(jsonContent.tours[0])

    // Tours.find({"y": 1919})
    // .then(tours => res.json(tours))
    // .catch(err => res.status(400).json('Error: ' + err))
})








module.exports = router