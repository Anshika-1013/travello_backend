const mongoose = require('mongoose');

    try{
        const conn =  mongoose.connect("mongodb://127.0.0.1:27017/travelDB")

       console.log("connection established")
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }

