const Message = require('../../db').Message
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
   Message.findAll()
        .then((message) => {
            res.status(200).send(message)
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
   Message.create({
        Message: req.body.Message,
        Booksellerid:req.body.Booksellerid,
        useridEmail: req.body.useridEmail,
    }).then((message) => {
        res.status(201).send(message)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

route.post('/getmessage', (req, res) => {
   
   Message.findAll({
    where:{Booksellerid:req.body.Booksellerid
          }
       })
       
        .then((message) => {
            res.status(200).send(message)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve Listings"
            })
        })
})

exports = module.exports = route