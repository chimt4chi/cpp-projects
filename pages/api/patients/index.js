import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import connectToDatabase from "../../../lib/mongodb";
import Patient from "../../../models/Patient";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  await connectToDatabase();

  if (req.method === "POST") {
    try {
      const patientID = Math.random().toString(36).substring(2, 10);

      const newPatient = new Patient({
        ...req.body,
        patientID,
      });

      await newPatient.save();

      res
        .status(201)
        .json({ message: "Patient added successfully", patient: newPatient });
    } catch (error) {
      console.error("Error adding patient:", error);
      res
        .status(500)
        .json({ error: "Error adding patient record", details: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const { search = "" } = req.query;

      const patients = await Patient.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { contactInfo: { $regex: search, $options: "i" } },
        ],
      });

      res.status(200).json({ patients });
    } catch (error) {
      console.error("Error fetching patients:", error);
      res.status(500).json({ error: "Failed to fetch patients" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
