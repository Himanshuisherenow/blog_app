const mongoose = require('mangoose');

const urlSchema = new mangoose.Schema({
    shortId:{
        type : String,
        required :true,
        unique : true
    },
    redirectURL:{
        type : String,
        unique : true
    }
})