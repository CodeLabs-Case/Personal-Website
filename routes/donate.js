const router = require('express').Router()
const path = require('path')
const fs = require('fs')


router.route('/').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    if(host === 'localhost:3000') {
        res.render('C:/Users/davis/OneDrive/Documents/Development/ProJavaScript/test4elastic0/views/donate.ejs')
    } else {
        res.render(path.join('/var/app/current/views/home.ejs'))
    }
})



module.exports = router