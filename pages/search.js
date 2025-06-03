import { useState } from "react";
// import "../styles/global.css";
import Navbar from "@/components/Navbar";

export default function SearchPatients() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a name or contact info to search.");
      setResults([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/patients?search=${query}`);
      const data = await res.json();

      if (res.ok) {
        setResults(data.patients);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch patients.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Search Patients
          </h1>

          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <input
              type="text"
              placeholder="Search by name or contact"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {results.length === 0 && query && !loading && !error && (
            <p className="text-center text-gray-500">No patients found.</p>
          )}

          {results.length > 0 && (
            <div className="space-y-4">
              {results.map((patient) => (
                <a
                  key={patient._id}
                  href={`/patients/${patient.patientID}`}
                  className="block bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <p>
                      <span className="font-semibold">Name:</span>{" "}
                      {patient.name}
                    </p>
                    <p>
                      <span className="font-semibold">Age:</span> {patient.age}
                    </p>
                    <p>
                      <span className="font-semibold">Gender:</span>{" "}
                      {patient.gender}
                    </p>
                    <p>
                      <span className="font-semibold">Contact:</span>{" "}
                      {patient.contactInfo}
                    </p>
                    <p>
                      <span className="font-semibold">Patient ID:</span>{" "}
                      {patient.patientID}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
