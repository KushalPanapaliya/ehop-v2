
const express = require('express');
const app = express();

require('dotenv/config');//This will allow us to use variable from .env file
const api = process.env.API_URL;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.get(`${api}+/products`, (req, res)=>{
    const product = {
        id: 1,
        name: 'product1',
        image: 'imgUrl',
    }
    res.send(product);
});
app.post(`${api}/products`, (req, res)=>{
    const newProd = req.body;
    console.log(newProd);
    res.send(newProd);
});

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>console.log("Database connected successfully!!!"))
.catch((err)=>console.log(err));

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000"+api);
});