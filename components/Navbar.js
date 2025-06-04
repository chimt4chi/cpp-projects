import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession(); // 👈 get current session
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "/appointment", label: "Book Appointment" },
    { href: "/speciality", label: "Specialities" },
    { href: "/add-patient", label: "Add Patient" },
    { href: "/search", label: "Search Patients" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileDropdown = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link legacyBehavior href="/">
          <a className="text-3xl font-bold text-blue-500 hover:text-blue-400">
            Healthcare PM
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
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

          {/* Conditionally render Profile or Login */}
          {session ? (
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="text-lg hover:text-blue-400 transition focus:outline-none"
              >
                Profile <i className="fas fa-caret-down ml-1" />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg py-2 z-50">
                  <Link legacyBehavior href="/profile">
                    <a className="block px-4 py-2 hover:bg-gray-200">
                      My Profile
                    </a>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link legacyBehavior href="/auth/login">
              <a className="text-lg hover:text-blue-400 transition">Login</a>
            </Link>
          )}
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

        {/* Conditionally render Profile or Login in mobile */}
        <div className="mt-4 border-t border-gray-600 pt-2">
          {session ? (
            <>
              <Link legacyBehavior href="/profile">
                <a
                  onClick={toggleMobileMenu}
                  className="block text-lg py-2 text-white hover:text-blue-400"
                >
                  My Profile
                </a>
              </Link>
              <button
                onClick={() => {
                  toggleMobileMenu();
                  handleLogout();
                }}
                className="block w-full text-left text-lg py-2 text-white hover:text-blue-400"
              >
                Logout
              </button>
            </>
          ) : (
            <Link legacyBehavior href="/auth/login">
              <a
                onClick={toggleMobileMenu}
                className="block text-lg py-2 text-white hover:text-blue-400"
              >
                Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
