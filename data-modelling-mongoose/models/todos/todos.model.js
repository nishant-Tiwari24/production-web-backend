import mongoose, { model } from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type:String,
        required:true,
    },
    
},{timestamps:true});

export const Todo = mongoose.model("Todo", todoSchema);