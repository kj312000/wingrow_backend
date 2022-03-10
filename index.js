const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const {products , locations} = require('./data.json')

app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  }) 

app.get('/',(req,res)=>{
    res.send("welcome to wingrow api")
})

app.get('/products',(req,res)=>{
    res.send(products)
})

app.get('/locations',(req,res)=>{
    res.send(locations)
})

app.listen(port , ()=>{
    console.log(`running on port ${port}`)
})