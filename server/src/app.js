const express = require("express");
const dbConnect= require("./config/dbConnect")
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./controllers/users/usersRoute");
const { errorHandler, notFound} = require("./middlewares/errorMiddleware");


const app = express();


//middlewares
app.use(express.json());


//dbConnect
dbConnect();

//routes

app.use("/api/users",userRoute);


//Error
app.use(notFound);
app.use(errorHandler);


 
module.exports=app;