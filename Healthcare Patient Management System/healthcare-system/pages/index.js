import Navbar from "../components/Navbar";
import "../styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center py-24 bg-blue-100 rounded-lg shadow-lg">
          <h1 className="text-6xl font-extrabold text-blue-700 mb-4">
            Healthcare Patient Management System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Simplify your patient management workflow with a secure and
            easy-to-use platform.
          </p>
          <a
            href="/add-patient"
            className="inline-block bg-blue-600 text-white text-lg px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Add a New Patient
          </a>
        </section>

        {/* Features Section */}
        <section className="py-16 grid md:grid-cols-3 gap-12">
          <div className="text-center bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Easy Access
            </h3>
            <p className="text-gray-700">
              Access patient records and health information at your fingertips.
              Fast and easy search functionality.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Data Security
            </h3>
            <p className="text-gray-700">
              Your patients' data is stored securely with state-of-the-art
              encryption, ensuring privacy and protection.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-700">
              Our support team is available around the clock to help you with
              any issues or questions you may have.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">
            About Healthcare Patient Management
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our app is designed to streamline patient management for healthcare
            professionals. Built with Next.js and MongoDB, it allows for quick,
            secure management of patient records. From adding new patients to
            updating their details, our platform is optimized for speed and ease
            of use.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Short Description */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-blue-500 mb-4">
              Healthcare Patient Management
            </h3>
            <p className="text-gray-400 text-sm">
              Simplifying patient management with a secure and easy-to-use
              platform for healthcare professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/add-patient"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Add Patient
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media and Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect with Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-6 mb-4">
              {/* Social Icons */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook text-white hover:text-blue-600 transition duration-300 text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-white hover:text-blue-400 transition duration-300 text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-white hover:text-blue-500 transition duration-300 text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-white hover:text-pink-500 transition duration-300 text-2xl"></i>
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              <p>
                Contact us at:{" "}
                <span className="text-gray-300">support@healthcarepm.com</span>
              </p>
              <p className="mt-2">
                Phone: <span className="text-gray-300">+1 800 123 4567</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Healthcare Patient Management. All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
