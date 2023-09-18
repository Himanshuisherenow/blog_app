const express = require('express'); 
const  dotenv = require('dotenv').config();
const port = process.env.PORT || 9000;
const colors = require('colors');
const urlRoute  = require('./routes/url')
const {connectToMongoDB} = require('./connect');
const URL = require('./models/url');

const app = express();
connectToMongoDB('mongodb+srv://himanshu123:himanshu123@urlshort.oeqm1am.mongodb.net/').then(()=>console.log("mongodb is connected"))

app.use(express.urlencoded({extended:false})); 
app.use(express.json());

app.use('/url',urlRoute )

app.get('/:shortId',async(req,res)=>{
     
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({

        shortId, },
        {
        $push:{
            visitHistory:{
         timestamp :Date.now(),  
            },
        }
    })
    res.redirect(entry.redirectURL);
})


app.listen(port , ()=>console.log(`Server is Started Running ${port}`.bgMagenta));

//IP address , when where req