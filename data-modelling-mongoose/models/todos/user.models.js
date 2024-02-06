import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: true, 
            unique: true,
            lowercase: true
        },
        email : {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password : {
            type: String,
            required: [true, 'Please provide a password']
        }
    }, {timestamps : true}
);

const User = mongoose.model("User",userSchema);