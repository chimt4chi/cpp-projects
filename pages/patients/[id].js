import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../../styles/global.css";

export default function PatientDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    contactInfo: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`/api/patients/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPatient(data);
          setForm(data);
          setLoading(false);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const res = await fetch(`/api/patients/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok && data.patient) {
      setPatient(data.patient); // Update the state with new data
      alert(data.message || "Patient updated");
      setEditMode(false);
    } else {
      alert(data.error || "Failed to update patient");
    }
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this patient?")) {
      const res = await fetch(`/api/patients/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      alert(data.message);
      router.push("/search");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Patient Details</h1>

      <div className="space-y-4">
        {["name", "age", "gender", "contactInfo"].map((field) => (
          <div key={field}>
            <label className="block font-medium capitalize">{field}:</label>
            {editMode ? (
              <input
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            ) : (
              <p className="text-gray-700">{patient[field]}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {editMode ? (
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
