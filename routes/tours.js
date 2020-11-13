const router = require('express').Router()
const path = require('path')
const fs = require('fs')

// let Tours = require('../models/tours.model')
// const { json } = require('body-parser')



router.route('/').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    // This is how I had to set the path to work in this seperate file.
    // However, EJS will be used in future so this may be temporary.
    res.sendFile(path.join('/var/app/current/views/tours.html'))
})

router.route('/:id').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    let file = '/var/app/current/models/database.json'
    let contents = fs.readFileSync(file);
    let jsonContent = JSON.parse(contents);

    let param = req.params.id
    if(param == 'all'){
        res.send(jsonContent)
    } else {
        let id = parseInt(param, 10)
        res.send(jsonContent.tours[id])
    }
    
    

    
    // If you are able to do store and operate on the data in this way then it will be the better option.
    // You will want to make another project where you connect to the mongodb instance so that you know how to ...
    // ... when you are working with Elastic.
    

    if(id == 'all'){
        res.send(jsonContent)
    } else {
        res.send(jsonContent.tours[id])
    }
    

    // Tours.find()
    // .then(tours => res.json(tours))
    // .catch(err => res.status(400).json('Error: ' + err))
})

// router.get('/all', (req, res, err)=>{
//     if(err){
//         console.log(err)
//     }
    
    
    
//     // If you are able to do store and operate on the data in this way then it will be the better option.
//     // You will want to make another project where you connect to the mongodb instance so that you know how to ...
//     // ... when you are working with Elastic.
//     var contents = fs.readFileSync('/var/app/current/models/database.json');
//     var jsonContent = JSON.parse(contents);
//     res.send(jsonContent)

//     // Tours.find()
//     // .then(tours => res.json(tours))
//     // .catch(err => res.status(400).json('Error: ' + err))
// })


router.route('/add').post((req, res)=>{
    let file = '/var/app/current/models/database.json'
    let contents = fs.readFileSync(file);
    let jsonContent = JSON.parse(contents);

    // jsonContent.tours.push(
    //     {
    //         "location": "new",
    //         "brewries": [
    //             { 
    //                 "name1": "new",
    //                 "name2": "new",
    //                 "nameN": "new"
    //             }

    //         ],
    //         "capacity": "new",
    //         "remaining": "new",
    //         "price": "new"
    //     }
    // )

    res.json(jsonContent)

    /// Write the data to a text file
    // Convert the data structure to a string
    // let jsonString = JSON.stringify(jsonContent, null, 2)
    // fs.writeFileSync(file, jsonString, err => {
    //     if (err) {
    //         console.log('Error writing file', err)
    //     } else {
    //         console.log('Successfully wrote file')
    //     }
    // })
})








module.exports = router