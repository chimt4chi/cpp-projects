import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function BookAppointment() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
    appointmentType: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!session) {
      alert("You need to be logged in to book an appointment.");
      setIsLoading(false);
      return;
    }

    console.log("Session data:", session);

    try {
      const requestData = {
        userId: session.user.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        appointmentType: formData.appointmentType,
        appointmentDate: formData.appointmentDate,
        appointmentTime: formData.appointmentTime,
      };

      console.log("Request data being sent:", requestData);
      console.log("Session user:", session.user);

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Appointment booked successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          appointmentDate: "",
          appointmentTime: "",
          appointmentType: "",
        });
      } else {
        alert(data.message || "Failed to book the appointment.");
        console.error("API Error:", data);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Pre-fill form with session data if available
  useEffect(() => {
    if (session?.user) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name || prev.name,
        email: session.user.email || prev.email,
      }));
    }
  }, [session]);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Book an Appointment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Date */}
          <div className="form-group">
            <label
              htmlFor="appointmentDate"
              className="block text-sm font-medium text-gray-700"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]} // Prevent past dates
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Time */}
          <div className="form-group">
            <label
              htmlFor="appointmentTime"
              className="block text-sm font-medium text-gray-700"
            >
              Preferred Time
            </label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Appointment Type */}
          <div className="form-group">
            <label
              htmlFor="appointmentType"
              className="block text-sm font-medium text-gray-700"
            >
              Appointment Type
            </label>
            <select
              id="appointmentType"
              name="appointmentType"
              value={formData.appointmentType}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Type</option>
              <option value="general_checkup">General Checkup</option>
              <option value="emergency">Emergency</option>
              <option value="specialist_consultation">
                Specialist Consultation
              </option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </>
  );
}
