import Navbar from "../components/Navbar";
// import "../styles/global.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center py-20 bg-blue-100 rounded-lg shadow-lg mb-12">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700">
            We would love to hear from you. Whether you have questions,
            feedback, or inquiries, feel free to reach out.
          </p>
        </section>

        {/* Contact Information Section */}
        <section className="grid md:grid-cols-2 gap-12 py-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold text-blue-600 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              You can reach us through the following channels:
            </p>
            <div className="text-lg text-gray-700 mb-4">
              <p>
                Email:{" "}
                <a
                  href="mailto:support@healthcarepm.com"
                  className="text-blue-500 hover:text-blue-600"
                >
                  support@healthcarepm.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+18001234567"
                  className="text-blue-500 hover:text-blue-600"
                >
                  +1 800 123 4567
                </a>
              </p>
              <p className="mt-4">Address: 123 Healthcare St, City, Country</p>
            </div>
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              {/* Social Media Icons */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-blue-600 transition"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-blue-400 transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-blue-500 transition"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-pink-500 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-semibold text-blue-600 mb-6">
              Send Us a Message
            </h2>
            <form
              className="bg-white p-8 rounded-lg shadow-lg"
              action="mailto:support@healthcarepm.com"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-lg px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
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
