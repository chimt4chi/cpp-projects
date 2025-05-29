// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-center space-x-8">
      <Link href="/">
        <span className="hover:underline">Home</span>
      </Link>
      <Link href="/add-patient">
        <span className="hover:underline">Add Patient</span>
      </Link>
      <Link href="/search">
        <span className="hover:underline">Search Patients</span>
      </Link>
    </nav>
  );
}
