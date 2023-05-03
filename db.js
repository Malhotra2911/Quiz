const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/quiz";

mongoose.set("strictQuery", false);
const connectToMongo = () => {
    mongoose.connect(mongoURI);
    if(mongoURI){
        console.log("Connected to mongo successfully");
    }else{
        console.log("Not Connected");
    }
}

module.exports = connectToMongo;