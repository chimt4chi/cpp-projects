import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const router = useRouter();

  const userRole = session?.user?.role || "guest"; // Default to 'guest' if not logged in

  const navLinks = [
    {
      href: "/appointment",
      label: "Book Appointment",
      roles: ["admin", "doctor", "patient", "guest"],
    },
    { href: "/speciality", label: "Specialities", roles: ["admin", "guest"] },
    { href: "/add-patient", label: "Add Patient", roles: ["admin", "doctor"] },
    { href: "/search", label: "Search Patients", roles: ["admin", "doctor"] },
    // {
    //   href: "/profile",
    //   label: "My Profile",
    //   roles: ["admin", "doctor", "patient"],
    // },
  ];

  const filteredLinks = navLinks.filter((link) =>
    link.roles.includes(userRole)
  );

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileDropdown = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  const handleLogout = () => signOut({ callbackUrl: "/" });

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold text-blue-500 hover:text-blue-400"
        >
          Healthcare PM
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg hover:text-blue-400 transition ${
                router.pathname === link.href ? "text-blue-400" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Auth Actions */}
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
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    My Profile
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
            <Link
              href="/auth/login"
              className="text-lg hover:text-blue-400 transition"
            >
              Login
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
        {filteredLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={toggleMobileMenu}
            className={`block text-lg py-2 hover:text-blue-400 transition ${
              router.pathname === link.href ? "text-blue-400" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <div className="mt-4 border-t border-gray-600 pt-2">
          {session ? (
            <>
              <Link
                href="/profile"
                onClick={toggleMobileMenu}
                className="block text-lg py-2 text-white hover:text-blue-400"
              >
                My Profile
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
            <Link
              href="/auth/login"
              onClick={toggleMobileMenu}
              className="block text-lg py-2 text-white hover:text-blue-400"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
