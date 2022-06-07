const User = require("../../model/User");




//Register
const registerUser = async (req,res)=>{
    const {email, firstname, lastname , password} = req?.body;    
    
    //check if user exists
    const userExists = await User.findOne({email});  
    
    try {
         const user = await User.create({email, firstname, lastname, password});
         res.status(200).json(user);
        } catch (error) {
           
            res.json(error);
        }
    
    };

module.exports = { registerUser };