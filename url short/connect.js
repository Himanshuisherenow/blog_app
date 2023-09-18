const mongoose = require('mongoose');
const url = require('./models/url');

async function connectToMongoDB(url){
    return  mongoose.connect(url);
} 

module.exports = {connectToMongoDB}