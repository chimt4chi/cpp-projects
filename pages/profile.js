import Navbar from "@/components/Navbar";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/auth/login");
      return;
    }

    const fetchAppointments = async () => {
      try {
        const response = await fetch("/api/appointments");
        const data = await response.json();

        if (response.ok && Array.isArray(data.appointments)) {
          setAppointments(data.appointments);
        } else {
          console.error("Unexpected response:", data);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    if (session?.user?.id) {
      fetchAppointments();
    }
  }, [session, status]);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const cancelAppointment = async (appointmentId) => {
    if (!confirm("Are you sure you want to cancel this appointment?")) return;

    try {
      const response = await fetch(`/api/appointments?id=${appointmentId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        alert("Appointment cancelled successfully.");
        setAppointments((prev) =>
          prev.map((appt) =>
            appt._id === appointmentId ? { ...appt, status: "Cancelled" } : appt
          )
        );
      } else {
        alert(data.message || "Failed to cancel appointment.");
      }
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      alert("An error occurred while cancelling the appointment.");
    }
  };

  if (status === "loading") {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-700">Loading user data...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Your Profile
          </h1>
          <p className="text-lg text-gray-700">
            Manage your account and settings
          </p>
        </section>

        {/* User Info */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-center space-x-6">
            {session.user.image ? (
              <img
                src={session.user.image}
                alt="User Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-semibold text-blue-600">
                {session.user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
            )}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {session.user.name}
              </h2>
              <p className="text-lg text-gray-600">{session.user.email}</p>
              <p className="mt-1 text-sm font-medium text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded">
                Role: {session.user.role || "User"}
              </p>
            </div>
          </div>
        </section>

        {/* Appointments */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Appointments
          </h2>

          {appointments.length === 0 ? (
            <p className="text-gray-600">
              You don't have any appointments yet.
            </p>
          ) : (
            <ul className="space-y-6">
              {appointments.map((appointment) => (
                <li
                  key={appointment._id}
                  className="border-b border-gray-200 pb-4 flex justify-between items-start"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600">
                      {appointment.appointmentType.replace(/_/g, " ")}
                    </h3>
                    <p className="text-gray-600">
                      Patient: {appointment.patientId?.name || "Unknown"}
                    </p>
                    <p className="text-gray-600">
                      Date:{" "}
                      {new Date(
                        appointment.appointmentDate
                      ).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600">
                      Time: {appointment.appointmentTime}
                    </p>
                    <p
                      className={`text-gray-600 capitalize ${
                        appointment.status === "Cancelled"
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      Status: {appointment.status}
                    </p>
                  </div>
                  {appointment.status !== "Cancelled" && (
                    <button
                      onClick={() => cancelAppointment(appointment._id)}
                      className="ml-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Cancel
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}
