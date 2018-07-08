const Wishlist = require('../../db').Wishlist
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
   Wishlist.findAll()
        .then((wishlist) => {
            res.status(200).send(wishlist)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve Listings"
            })
        })
})

route.post('/', (req, res) => {
    // Validate the values
   
    // Add a new product
   Wishlist.create({
        Bookname: req.body.Bookname,
        Booksellerid:req.body.Booksellerid,
        useridEmail: req.body.useridEmail,
    }).then((wishlist) => {
        res.status(201).send(wishlist)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})
route.post('/wishlistdata', (req, res) => {
    // Validate the values
   
    // Add a new product
    Wishlist.findAll({
       where:{useridEmail:req.body.useridEmail
       }
   })
        .then((wishlist) => {
            res.status(200).send(wishlist)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve Listings"
            })
        })
})

exports = module.exports = route