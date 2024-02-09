import mongoose, { model } from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        required:true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subtodos: [
        {
            type: mongoose.Schema.Types.ObjectId,  
            ref: "Subtodo",
        }
    ] //Array of subtodos
},{timestamps:true});

export const Todo = mongoose.model("Todo", todoSchema);