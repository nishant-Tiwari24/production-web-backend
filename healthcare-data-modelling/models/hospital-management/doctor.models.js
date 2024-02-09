import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
    },
    experienceYears: {
      type: Number,
    },
    contact: {
      phone: { type: String },
      email: { type: String },
      address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String },
      },
    },
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
