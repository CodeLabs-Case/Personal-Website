const router = require('express').Router()



router.use("/", require('./home.js'))
router.use("/tours", require('./tours.js'))



module.exports = router