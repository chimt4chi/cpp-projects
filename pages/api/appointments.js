import mongoose from "mongoose";
import Appointment from "@/models/Appointment";
import User from "@/models/User";
import Patient from "@/models/Patient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]"; // Adjust if your auth options are in a different location

async function connectDb() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default async function handler(req, res) {
  await connectDb();

  if (req.method === "POST") {
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

      const missingFields = [];
      if (!userId) missingFields.push("userId");
      if (!name) missingFields.push("name");
      if (!email) missingFields.push("email");
      if (!appointmentType) missingFields.push("appointmentType");
      if (!appointmentDate) missingFields.push("appointmentDate");
      if (!appointmentTime) missingFields.push("appointmentTime");

      if (missingFields.length > 0) {
        return res.status(400).json({
          message: `Missing required fields: ${missingFields.join(", ")}`,
        });
      }

      const userObjectId = new mongoose.Types.ObjectId(userId);

      const user = await User.findById(userObjectId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      let patient = await Patient.findOne({
        $or: [{ contactInfo: email }, { name: name }],
      });

      if (!patient) {
        const patientCount = await Patient.countDocuments();
        const patientID = `PAT${String(patientCount + 1).padStart(4, "0")}`;

        patient = new Patient({
          patientID,
          name,
          contactInfo: email,
        });
        await patient.save();
      }

      const appointment = new Appointment({
        userId: userObjectId,
        patientId: patient._id,
        appointmentType,
        appointmentDate,
        appointmentTime,
        status: "Scheduled",
      });

      await appointment.save();

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
  }

  if (req.method === "GET") {
    try {
      const session = await getServerSession(req, res, authOptions);
      if (!session || !session.user?.id) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const appointments = await Appointment.find({ userId: session.user.id })
        .populate("patientId", "name patientID contactInfo")
        .sort({ appointmentDate: -1 });

      return res.status(200).json({ appointments });
    } catch (error) {
      console.error("Error fetching appointments:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const session = await getServerSession(req, res, authOptions);
      const { id } = req.query;

      if (!session || !session.user?.id) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const appointment = await Appointment.findOne({
        _id: id,
        userId: session.user.id,
      });

      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }

      appointment.status = "Cancelled";
      await appointment.save();

      return res.status(200).json({ message: "Appointment cancelled" });
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
