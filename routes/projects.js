const router = require('express').Router()
const path = require('path')
const fs = require('fs')



router.route('/').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    // This is how I had to set the path to work in this seperate file.
    // However, EJS will be used in future so this may be temporary.
    // Remote Path
    res.sendFile(path.join('/var/app/current/views/projects.html'))

    // Local Path
    // res.sendFile('C:/Users/davis/OneDrive/Documents/Development/ProJavaScript/test4elastic0/views/projects.html')
})



module.exports = router