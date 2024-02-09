import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    age: { 
        type: Number,
        required: true
    },
    gender: { 
        type: String, 
        enum: ["Male", "Female", "Other"],
        required: true

    },
    dateOfBirth: { type: Date 
    },
    contact: {
      phone: 
        { 
        type: String 
        },
      email: 
        { 
        type: String 
        },
      address: 
        {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String },
        },
    },
    diagnosis: { 
        type: String,
        required: true 
    },
    medications: [{ type: String }],
    appointments: [
      {
        date: { type: Date },
        reason: { type: String },
      },
    ],
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital"
    }
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
