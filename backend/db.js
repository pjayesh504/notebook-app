const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/iNotebook";

const connectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully!");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToMongo;