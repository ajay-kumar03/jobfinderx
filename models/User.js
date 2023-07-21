const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: [ true, "Firstname is required."]
    },
    lastName : {
        type: String,
        required: [ true, "Lastname is required."]
    },
    email : {
        type: String,
        required: [ true, "Email is required."]
    },
    password : {
        type: String,
        required: [ true, "Password is required."]
    },
    isEmployer : {
        type: Boolean,
		default: true
    },
    mobileNo : {
        type: String,
        required: [ true, "Mobile Number is required."]
    },
    address:{
    	houseNumber: {
    		type: String,
    		default: "NA"
    	 	},
    	street: {
    		type: String,
    		default: "NA"
    	 	},
    	city: {
    		type: String,
    		default: "NA"
    	 	},
    	province: {
    		type: String,
    		default: "NA"
    	 	},
    	country: {
    		type: String,
    		default: "NA"
    	 	},
    	zipCode: {
    		type: Number,
    		default: 0
    	 	}
    }   
})
module.exports = mongoose.model("User", userSchema);
