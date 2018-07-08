const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/listings', require('./listings'))
route.use('/wishlist', require('./wishlist'))
route.use('/message', require('./message'))

exports = module.exports = {
    route
}