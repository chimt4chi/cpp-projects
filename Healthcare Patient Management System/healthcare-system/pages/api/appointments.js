import mongoose from "mongoose";
import Appointment from "@/models/Appointment";
import User from "@/models/User";
import Patient from "@/models/Patient";

async function connectDb() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectDb();
    try {
      const {
        userId,
        name,
        email,
        phone,
        appointmentType,
        appointmentDate,
        appointmentTime,
      } = req.body;

      console.log("Received data:", req.body);

      // Check if required fields are provided
      const missingFields = [];
      if (!userId) missingFields.push("userId");
      if (!name) missingFields.push("name");
      if (!email) missingFields.push("email");
      if (!appointmentType) missingFields.push("appointmentType");
      if (!appointmentDate) missingFields.push("appointmentDate");
      if (!appointmentTime) missingFields.push("appointmentTime");

      if (missingFields.length > 0) {
        console.log("Missing fields:", missingFields);
        console.log("Field values:", {
          userId,
          name,
          email,
          appointmentType,
          appointmentDate,
          appointmentTime,
        });
        return res.status(400).json({
          message: `Missing required fields: ${missingFields.join(", ")}`,
          receivedData: req.body,
        });
      }

      // Convert userId to ObjectId (using new syntax)
      const userObjectId = new mongoose.Types.ObjectId(userId);

      // Check if the user exists
      const user = await User.findById(userObjectId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Find or create patient
      let patient = await Patient.findOne({
        $or: [{ contactInfo: email }, { name: name }],
      });

      if (!patient) {
        // Create new patient if doesn't exist
        const patientCount = await Patient.countDocuments();
        const patientID = `PAT${String(patientCount + 1).padStart(4, "0")}`;

        patient = new Patient({
          patientID,
          name,
          contactInfo: email,
          // You can add more fields as needed
        });
        await patient.save();
      }

      // Create a new appointment document
      const appointment = new Appointment({
        userId: userObjectId,
        patientId: patient._id,
        appointmentType,
        appointmentDate,
        appointmentTime,
        status: "Scheduled",
      });

      // Save the appointment
      await appointment.save();

      // Add appointment to user's appointments array
      user.appointments.push(appointment._id);
      await user.save();

      return res.status(201).json({
        message: "Appointment booked successfully!",
        appointment,
        patient: {
          id: patient._id,
          patientID: patient.patientID,
          name: patient.name,
        },
      });
    } catch (error) {
      console.error("Error creating appointment:", error);
      return res.status(500).json({
        message: "Error creating appointment. Please try again later.",
        error: error.message,
      });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
