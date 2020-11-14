const router = require('express').Router()
const path = require('path')
const fs = require('fs')

// For MongoDB version
// let Tours = require('../models/tours.model')
// const { json } = require('body-parser')


// GET
router.route('/').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    // This is how I had to set the path to work in this seperate file.
    // However, EJS will be used in future so this may be temporary.
    // Remote Path
    res.sendFile(path.join('/var/app/current/views/tours.html'))

    // Local Path
    // res.sendFile('C:/Users/davis/OneDrive/Documents/Development/ProJavaScript/test4elastic0/views/tours.html')
})

router.route('/:id').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    // Remote Path
    let file = '/var/app/current/models/database.json'
    // Local Path
    // let file = './models/database.json'

    let contents = fs.readFileSync(file);
    let jsonContent = JSON.parse(contents);

    let param = req.params.id

    // You will want to make another project where you connect to the mongodb instance so that you know how to ...
    // ... when you are working with Elastic.
    if(param == 'all'){
        res.send(jsonContent.tours)
    } else {
        let id = parseInt(param, 10)
        res.send(jsonContent.tours[id-1])
    }



    // Tours.find()
    // .then(tours => res.json(tours))
    // .catch(err => res.status(400).json('Error: ' + err))
})



// POST
router.route('/add/:id').post((req, res, err)=>{
    if(err){
        console.log(err)
    }

    // Remote Path
    let file = '/var/app/current/models/database.json'
    // Local Path
    // let file = './models/database.json'

    let contents = fs.readFileSync(file);
    let jsonContent = JSON.parse(contents);
    let value = "value" + req.params.id

    jsonContent.tours.push(
        {
            "name": value
        }
    )

    /// Write the data to a text file
    // Convert the data structure to a string
    let jsonString = JSON.stringify(jsonContent, null, 2)
    fs.writeFileSync(file, jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

    contents = fs.readFileSync(file);
    jsonContent = JSON.parse(contents);

    res.send(jsonContent)
})



// DELETE
router.route('/delete/:id').delete((req, res, err)=>{
    if(err){
        console.log(err)
    }

    let param = req.params.id
    let paramint = parseInt(param, 10)
    
    // Remote Path
    let file = '/var/app/current/models/database.json'
    // Local Path
    // let file = './models/database.json'

    let contents = fs.readFileSync(file);
    let jsonContent = JSON.parse(contents);

    // Delete the element of the array with the .splice() function
    jsonContent.tours.splice(paramint, paramint+1)

    /// Write the data to a text file
    // Convert the data structure to a string
    let jsonString = JSON.stringify(jsonContent, null, 2)
    fs.writeFileSync(file, jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

    contents = fs.readFileSync(file);
    jsonContent = JSON.parse(contents);

    res.send(jsonContent)
})



module.exports = router