import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product ID is required"]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"]
    }
},{timestamps: true})

const orderSchema = new mongoose.Schema({
    products: [orderItemSchema],
    
    totalAmount: {
        type: Number,
        default: 0,
        min: [0, "Total amount must be non-negative"]
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Customer ID is required"],
        index: true
    },
    status: {
        type: String,
        enum: ["pending", "processing", "completed", "cancelled"],
        default: "pending"
    },
    orderPrice: {
        type: Number,
        required: [true, "Order price is required"]
    }
}, {
    timestamps: true
});

export const Order = mongoose.model("Order", orderSchema);
