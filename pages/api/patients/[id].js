import connectToDatabase from "../../../lib/mongodb";
import Patient from "../../../models/Patient";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connectToDatabase();

    if (req.method === "GET") {
      const patient = await Patient.findOne({ patientID: id });

      if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
      }

      return res.status(200).json(patient);
    } else if (req.method === "PUT") {
      const updatedPatient = await Patient.findOneAndUpdate(
        { patientID: id },
        req.body,
        { new: true }
      );

      if (!updatedPatient) {
        return res.status(404).json({ error: "Patient not found" });
      }

      return res.status(200).json({
        message: "Patient updated successfully",
        patient: updatedPatient,
      });
    } else if (req.method === "DELETE") {
      const deletedPatient = await Patient.findOneAndDelete({ patientID: id });

      if (!deletedPatient) {
        return res.status(404).json({ error: "Patient not found" });
      }

      return res.status(200).json({
        message: "Patient deleted successfully",
        patient: deletedPatient,
      });
    }

    // If method is not GET, PUT or DELETE
    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server Error", details: error.message });
  }
}
