const router = require('express').Router()
const path = require('path')
const fs = require('fs')



router.route('/').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    // Check if the server is running in a local environment and render the proper path to file
    const host = req.headers.host

    if(host === 'localhost:3000') {
        res.render('C:/Users/davis/OneDrive/Documents/Development/ProJavaScript/Personal-Website/views/about.ejs')
    } else {
        res.render(path.join('/opt/bitnami/apache/htdocs/Personal-Website/views/about.ejs'))
    }
})



module.exports = router