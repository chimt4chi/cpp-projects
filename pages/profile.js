import Navbar from "@/components/Navbar";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Profile() {
  const { data: session, status } = useSession(); // Get session data
  const router = useRouter();
  const [appointments, setAppointments] = useState([]); // State to store appointments

  // Effect to fetch appointments when session is available
  useEffect(() => {
    if (status === "loading") return; // Prevent action while loading session

    if (!session) {
      router.push("/auth/login"); // Redirect to login if no session found
      return;
    }

    // Fetch appointments if user session is available
    if (session?.user?.id) {
      const fetchAppointments = async () => {
        try {
          const response = await fetch(
            `/api/appointments?userId=${session.user.id}`
          );

          if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data)) {
              setAppointments(data); // Update state with fetched appointments
            } else {
              console.error("Appointments data is not an array:", data);
            }
          } else {
            console.error("Failed to fetch appointments:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching appointments:", error);
        }
      };
      fetchAppointments();
    }
  }, [session, status]); // Re-run when session or status changes

  if (status === "loading") {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-700">Loading user data...</p>
      </div>
    );
  }

  // Handle edge case when user is not logged in (Redirect to login)
  if (!session) {
    return null; // Redirect happens in useEffect
  }

  // Handle logout
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

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

        {/* User Information Section */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-center space-x-6">
            <img
              src={session.user.image || "/default-profile-pic.jpg"}
              alt="User Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {session.user.name}
              </h2>
              <p className="text-lg text-gray-600">{session.user.email}</p>
            </div>
          </div>
        </section>

        {/* Appointments Section */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Appointments
          </h2>

          {/* If no appointments */}
          {appointments.length === 0 ? (
            <p className="text-gray-600">
              You don't have any appointments yet.
            </p>
          ) : (
            <ul className="space-y-4">
              {appointments.map((appointment) => (
                <li
                  key={appointment._id}
                  className="border-b border-gray-200 pb-4"
                >
                  <h3 className="text-xl font-semibold text-blue-600">
                    {appointment.appointmentType}
                  </h3>
                  <p className="text-gray-600">
                    Patient: {appointment.patientId?.name}
                  </p>
                  <p className="text-gray-600">
                    Date:{" "}
                    {new Date(appointment.appointmentDate).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">
                    Time: {appointment.appointmentTime}
                  </p>
                  <p className="text-gray-600">Status: {appointment.status}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Logout Section */}
        <section className="text-center">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </section>
      </main>
    </>
  );
}
