import Navbar from "../components/Navbar";
// import "../styles/global.css";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center py-20 bg-blue-100 rounded-lg shadow-lg mb-12">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            About Healthcare Patient Management
          </h1>
          <p className="text-lg text-gray-700">
            Learn more about how our platform simplifies patient management for
            healthcare professionals.
          </p>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Our mission is to revolutionize healthcare management by providing
            an intuitive, efficient, and secure platform that allows healthcare
            professionals to easily manage patient records, ensuring better
            patient outcomes through streamlined processes and data-driven
            insights.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Add Patients
              </h3>
              <p className="text-gray-700">
                Easily add new patients with just a few clicks, entering all
                necessary details and records in a secure, efficient way.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Search & Update Records
              </h3>
              <p className="text-gray-700">
                Quickly search for any patient record and update the information
                when necessary, keeping your database up-to-date.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Data Security
              </h3>
              <p className="text-gray-700">
                We ensure that all patient data is stored securely with
                industry-standard encryption, giving healthcare providers peace
                of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16">
          <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">
            The Technology Behind the Platform
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 mb-4">
              Our platform is powered by modern technologies to provide a
              seamless user experience and secure patient data management.
            </p>
            <p className="text-xl text-gray-700 mb-4">
              <span className="font-semibold">Built with Next.js</span> for a
              fast, server-rendered application with excellent performance and
              SEO optimization.
            </p>
            <p className="text-xl text-gray-700 mb-4">
              <span className="font-semibold">MongoDB</span> is used for our
              database to securely store and manage vast amounts of patient
              data, with a flexible and scalable structure.
            </p>
            <p className="text-xl text-gray-700">
              We use the latest web development practices, ensuring that the
              platform is highly reliable, secure, and easy to use for
              healthcare professionals.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-16">
          <p>
            &copy; {new Date().getFullYear()} Healthcare Patient Management. All
            Rights Reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
