var mongoose = require("mongoose");

//Write your Schema with Async Validators .
//When a new user try to register you need to makesure there is no User exist with current email adress.

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
