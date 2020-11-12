const router = require('express').Router()
const path = require('path')



router.get('/', (req, res, err)=>{
    if(err){
        console.log(err)
    }

    res.sendFile(path.join('/public/views/tours.html'))
})



module.exports = router