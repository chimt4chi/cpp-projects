import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    // { href: "/", label: "Home" },
    { href: "/appointment", label: "Book Appointment" },
    { href: "/speciality", label: "Specialities" }, // need to be a dropdown
    { href: "/add-patient", label: "Add Patient" },
    { href: "/search", label: "Search Patients" },
    { href: "/profile", label: "Profile" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link legacyBehavior href="/">
          <a className="text-3xl font-bold text-blue-500 hover:text-blue-400">
            Healthcare PM
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link legacyBehavior href={link.href} key={link.href}>
              <a
                className={`text-lg hover:text-blue-400 transition ${
                  router.pathname === link.href ? "text-blue-400" : "text-white"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <i className="fas fa-times text-white"></i>
          ) : (
            <i className="fas fa-bars text-white"></i>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } mt-4 px-6 py-4 bg-gray-700 rounded-lg`}
      >
        {navLinks.map((link) => (
          <Link legacyBehavior href={link.href} key={link.href}>
            <a
              onClick={toggleMobileMenu}
              className={`block text-lg py-2 text-white hover:text-blue-400 transition ${
                router.pathname === link.href ? "text-blue-400" : "text-white"
              }`}
            >
              {link.label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
