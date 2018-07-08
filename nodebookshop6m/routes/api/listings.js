const Listings = require('../../db').Listings
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
   Listings.findAll()
        .then((listings) => {
            res.status(200).send(listings)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve Listings"
            })
        })
})


route.post('/', (req, res) => {
    // Validate the values
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    // Add a new product
    Listings.create({
        Bookname: req.body.Bookname,
        author: req.body.author,
        discription: req.body.discription,
        price: parseFloat(req.body.price),
        condition:req.body.condition,
        sellerEmail: req.body.sellerEmail,
    }).then((listings) => {
        res.status(201).send(listings)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

route.post('/bookdetail', (req, res) => {
    // Get all products
   Listings.findAll({
        where:{id:req.body.id
       }
   })
        .then((listings) => {
            res.status(200).send(listings)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve Listings"
            })
        })
})

route.post('/filterbyname', (req, res) => {
    // Get all products
   Listings.findAll({
        where:{Bookname: req.body.Bookname
       }
   })
        .then((listings) => {
            res.status(200).send(listings)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve Listings"
            })
        })
})

route.post('/filterbycondition', (req, res) => {
    // Get all products
   Listings.findAll({
        where:{ condition:req.body.condition
       }
   })
        .then((listings) => {
            res.status(200).send(listings)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve Listings"
            })
        })
})

route.post('/filterbyauthor', (req, res) => {
    // Get all products
   Listings.findAll({
        where:{ author: req.body.author
       }
   })
        .then((listings) => {
            res.status(200).send(listings)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve Listings"
            })
        })
})


exports = module.exports = route