import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Patient', 
        required: true 
    },
    doctor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Doctor', 
        required: true 
    },
    admissionDate: { 
        type: Date, 
        required: true 
    },
    dischargeDate: { 
        type: Date 
    },
    diagnosis: { 
        type: String 
    },
    prescriptions: [{ type: String }],
    tests: [{ type: String }],
  },
  { timestamps: true }
);

const MedicalRecordModel = mongoose.model("MedicalRecord", medicalRecordSchema);

export default MedicalRecordModel;
