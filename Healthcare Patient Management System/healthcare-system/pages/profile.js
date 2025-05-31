// pages/profile.js
import { useSession, signOut, SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-700">Loading user data...</p>
      </div>
    );
  }

  if (!session) {
    // If not logged in, redirect to login
    router.push("/auth/login");
    return null;
  }

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <>
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
              src={session.user.image || "/default-profile.png"}
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
