const express = require("express");
const dbConnect= require("./config/dbConnect")
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./controllers/users/usersRoute");
const { errorHandler } = require("./middlewares/errorMiddleware");


const app = express();


//middlewares
app.use(express.json());


//dbConnect
dbConnect();

//routes

app.use("/",userRoute);


//Error
app.use(errorHandler);

 
module.exports=app;