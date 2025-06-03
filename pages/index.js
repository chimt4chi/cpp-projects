import Navbar from "../components/Navbar";
import "../styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section with Medical Imagery */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-32 w-40 h-40 bg-teal-200 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-200 rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              🏥 Advanced Healthcare Solutions
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 mb-6 leading-tight">
            Modern
            <br />
            <span className="text-gray-800">Healthcare</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of patient care with our cutting-edge digital
            platform. Streamlined workflows, enhanced security, and
            compassionate care at your fingertips.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/add-patient"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <i className="fas fa-user-plus"></i>
                Register New Patient
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="/emergency"
              className="px-8 py-4 border-2 border-red-500 text-red-600 rounded-full font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <i className="fas fa-ambulance"></i>
              Emergency Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Comprehensive Care Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated platform combines advanced technology with
              human-centered design to deliver exceptional patient experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Patient Management */}
            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4 mt-4">
                Patient Management
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Comprehensive patient records, appointment scheduling, and care
                coordination in one unified platform designed for efficiency.
              </p>
              <a
                href="/patients"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Digital Health Records */}
            <div className="group relative p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-file-medical text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-teal-800 mb-4 mt-4">
                Digital Health Records
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Secure, cloud-based electronic health records with real-time
                updates, ensuring continuity of care across all touchpoints.
              </p>
              <a
                href="/records"
                className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Telemedicine */}
            <div className="group relative p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-video text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 mt-4">
                Telemedicine
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Connect with patients remotely through secure video
                consultations, expanding access to quality healthcare services.
              </p>
              <a
                href="/telemedicine"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Analytics Dashboard */}
            <div className="group relative p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4 mt-4">
                Analytics & Insights
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Advanced analytics and reporting tools to track patient
                outcomes, optimize workflows, and improve care quality.
              </p>
              <a
                href="/analytics"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Security & Compliance */}
            <div className="group relative p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-4 mt-4">
                Security & Compliance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                HIPAA-compliant infrastructure with end-to-end encryption,
                ensuring the highest standards of data protection.
              </p>
              <a
                href="/security"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-800 transition-colors"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* 24/7 Support */}
            <div className="group relative p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-headset text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4 mt-4">
                24/7 Support
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Round-the-clock technical support and clinical assistance to
                ensure uninterrupted patient care delivery.
              </p>
              <a
                href="/support"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition-colors"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black mb-4">10K+</div>
              <div className="text-xl font-medium opacity-90">
                Patients Served
              </div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black mb-4">500+</div>
              <div className="text-xl font-medium opacity-90">
                Healthcare Providers
              </div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black mb-4">99.9%</div>
              <div className="text-xl font-medium opacity-90">
                Uptime Guarantee
              </div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black mb-4">24/7</div>
              <div className="text-xl font-medium opacity-90">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-8">
                Transforming Healthcare Through Innovation
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our platform represents the next generation of healthcare
                technology, built on modern frameworks like Next.js and powered
                by robust databases to ensure scalability, security, and
                reliability.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-rocket text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Lightning Fast Performance
                    </h4>
                    <p className="text-gray-600">
                      Optimized for speed with instant loading and real-time
                      updates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-lock text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Enterprise Security
                    </h4>
                    <p className="text-gray-600">
                      Bank-level encryption and compliance with healthcare
                      regulations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-mobile-alt text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Mobile First Design
                    </h4>
                    <p className="text-gray-600">
                      Seamless experience across all devices and platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-heartbeat text-6xl text-blue-600 mb-4"></i>
                  <p className="text-2xl font-semibold text-gray-800">
                    Built for Healthcare Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                ModernHealth
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                Revolutionizing healthcare delivery through innovative
                technology and compassionate care. Your health, our priority.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Access</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-home w-4"></i> Home
                  </a>
                </li>
                <li>
                  <a
                    href="/add-patient"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-user-plus w-4"></i> Register Patient
                  </a>
                </li>
                <li>
                  <a
                    href="/appointments"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-calendar w-4"></i> Appointments
                  </a>
                </li>
                <li>
                  <a
                    href="/emergency"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-ambulance w-4"></i> Emergency
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope w-5 text-blue-400"></i>
                  <span className="text-gray-400">
                    support@modernhealth.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone w-5 text-blue-400"></i>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt w-5 text-blue-400"></i>
                  <span className="text-gray-400">
                    123 Healthcare Ave, Medical District
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-clock w-5 text-blue-400"></i>
                  <span className="text-gray-400">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ModernHealth. All rights reserved.
                | HIPAA Compliant
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="/compliance"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Compliance
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
