const router = require('express').Router()
const path = require('path')

let Tours = require('../models')



router.get('/', (req, res, err)=>{
    if(err){
        console.log(err)
    }

    // This is how I had to set the path to work in this seperate file.
    // However, EJS will be used in future so this may be temporary.
    res.sendFile(path.join('/var/app/current/views/tours.html'))
})


// router.get('/all', (req, res, err)=>{
//     if(err){
//         console.log(err)
//     }

//     Tours.find()
//     .then(tours => res.json(tours))
//     .catch(err => res.status(400).json('Error: ' + err))
// })








module.exports = router