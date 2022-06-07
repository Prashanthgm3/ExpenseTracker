const mongoose = require("mongoose");

const dbConnect = async () => {
  
    try{
        await mongoose.connect("mongodb://localhost:27017/ExpenseTracker", {

            useUnifiedTopology: true,
              useNewUrlParser: true,
        });
console.log("DB Connected Successfully");

    } catch(error)
    {

       console.log("Connection error",+error);
    }

};

module.exports = dbConnect;