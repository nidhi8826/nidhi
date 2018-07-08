const express = require('express')
const path = require('path')
const port = process.env.PORT ||2678

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
/*app.use(function  (req,  res,  next) {
    res.header("Access-Control-Allow-Origin",  "*");
    res.setHeader('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/

obj={a:10,b:20}
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.listen(port, () => console.log('Server started at http://localhost:2678'))