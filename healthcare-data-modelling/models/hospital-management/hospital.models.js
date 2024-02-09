import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String },
      },
      coordinates: {
        latitude: { type: Number },
        longitude: { type: Number },
      },
    },
    contact: {
      phone: { type: String },
      email: { type: String },
    },
    departments: [{ type: String }],
    doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
  },
  { timestamps: true }
);

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;
