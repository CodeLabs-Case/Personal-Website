const router = require('express').Router()



router.use("/tours", require('./tours.js'))



module.exports = router