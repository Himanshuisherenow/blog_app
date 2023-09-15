const express = require('express');
const app = express();
const articalRouter = require('./routes/articles');

app.set("view engine","ejs");

app.use('/articles',articalRouter)

app.get('/virat',(req,res)=>{

    const articles = [{
        title : "science",
        createdAt : new Date().toLocaleDateString(),
        description : "science and technologi i s getting more and more highlighted and getting more devlopeds"
    },{
        title : "maths",
        createdAt : new Date().toLocaleDateString(),
        description : "maths and physics i s getting more and more highlighted and getting more devlopeds"
    }]
    res.render('articles/index',{articles:articles}  )
})

app.listen(3001,()=>{
    console.log("server started running...");
})