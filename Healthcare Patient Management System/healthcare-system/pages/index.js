// pages/index.js
import Navbar from "../components/Navbar";
import "../styles/global.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Healthcare Patient Management
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Manage your patients effortlessly with our easy-to-use app.
          </p>
          <a
            href="/add-patient"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Add a New Patient
          </a>
        </section>

        {/* About Section */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl font-semibold mb-4">About This App</h2>
          <p className="text-gray-700 leading-relaxed">
            This app allows healthcare professionals to add, search, update, and
            delete patient records quickly and securely. Built with Next.js and
            MongoDB, it provides a modern experience for patient management.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-16">
        &copy; {new Date().getFullYear()} Healthcare Patient Management. All
        rights reserved.
      </footer>
    </>
  );
}
