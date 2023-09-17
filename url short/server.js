const express = require('express'); 
const  dotenv = require('dotenv').config();
const port = process.env.PORT || 9000;
const colors = require('colors');
const urlRoute  = require('./routes/url')
const {connectToMongoDB} = require('./connect')

connectToMongoDB('mongodb+srv://himanshu123:himanshu123@urlshort.oeqm1am.mongodb.net/').then(()=>console.log("mongodb is connected"))
const app = express();
app.use(express.urlencoded({extended:false})); 
app.use(express.json());

app.use('/url',urlRoute )



app.listen(port , ()=>console.log(`Server is Started Running ${port}`.bgMagenta));