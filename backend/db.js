const mongoose = require('mongoose');
// const mongoURI = "mongodb://0.0.0.0:27017/iNotebook";
const mongoURI = "mongodb+srv://pjayesh504:LVNNK2wBU4NMaoeu@cluster0.vtb4cmm.mongodb.net/iNotebook?retryWrites=true&w=majority&appName=Cluster0";

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