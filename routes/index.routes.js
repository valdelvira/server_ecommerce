const router = require('express').Router()

//router.use('/' require('./'))
router.use('/product', require('./product.routes.js'))

module.exports = router