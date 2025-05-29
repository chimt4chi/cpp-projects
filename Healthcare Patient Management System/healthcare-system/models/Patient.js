import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  patientID: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  contactInfo: { type: String },
  allergies: { type: [String] },
  medicalHistory: { type: [String] },
  currentPrescriptions: { type: [String] },
  doctorNotes: { type: [String] },
  visitDates: { type: [Date] },
});

export default mongoose.models.Patient ||
  mongoose.model("Patient", PatientSchema);
