import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  patientID: { type: String, unique: true },
  name: String,
  contactInfo: String,
  age: Number, // ✅ Add this
  gender: {
    type: String,
    enum: ["male", "female", "other"], // ✅ Add this
  },
  allergies: [String],
  medicalHistory: [String],
  currentPrescriptions: [String],
  doctorNotes: [String],
  visitDates: [Date],
});

export default mongoose.models.Patient ||
  mongoose.model("Patient", PatientSchema);
