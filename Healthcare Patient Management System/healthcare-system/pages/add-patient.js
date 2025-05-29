import { useState } from "react";
import "../styles/global.css";
import Navbar from "@/components/Navbar";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function AddPatient() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contactInfo: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.gender ||
      !formData.contactInfo
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);

      // Reset form
      setFormData({ name: "", age: "", gender: "", contactInfo: "" });
    } catch (error) {
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Patient</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Contact Info</label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Add Patient"}
          </button>
        </form>
      </section>
    </div>
  );
}
