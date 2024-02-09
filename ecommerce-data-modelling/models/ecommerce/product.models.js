import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Category is required"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Owner is required"]
    }
}, {
    timestamps: true
});

export const Product = mongoose.model("Product", productSchema);
