const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth =require("../auth");

module.exports.registerUser = (reqBody) =>{
    let newUser = new User({
        firstName : reqBody.firstName,
        lastName : reqBody.lastName,
        email : reqBody.email,
        mobileNo : reqBody.mobileNo,
        address : reqBody.address,
        password : bcrypt.hashSync(reqBody.password,10)
    })
    return newUser.save().then((user,error) =>{
        if(error){
            return false
        } else {
            return true
        }
    })
}

module.exports.loginUser = (reqBody) => {

    // .findOne() will look for the first document that matches
    return User.findOne({ email: reqBody.email }).then(result => {

        console.log(result);

        // Email doesn't exist
        if(result == null){
        	let popupalert = alert("Kindly register before you try to login.");
            return popupalert;

        } else {

            // We now know that the email is correct, is password correct also?
            const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);

            console.log(isPasswordCorrect);
            console.log(result);

            // Correct password
            if(isPasswordCorrect){

                return { access: auth.createAccessToken(result) }

            // Password incorrect   
            } else {

                return false
                
            };

        };
    });
};