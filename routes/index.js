const router = require('express').Router()



router.use("/", require('./home.js'))
router.use("/projects", require('./projects.js'))
router.use("/education", require('./education.js'))
router.use("/about", require('./about.js'))
router.use("/donate", require('./donate.js'))



module.exports = router