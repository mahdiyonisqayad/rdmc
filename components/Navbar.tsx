import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={40}
            height={40}
          />
          <h1 className="text-xl font-bold text-gray-800">
            JJU Repo System
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-semibold">
          <Link
            href="/directories"
            className="hover:text-blue-600 transition-colors"
          >
            Directories
          </Link>
          <Link href="/browse" className="hover:text-blue-600 transition-colors">
            Browse
          </Link>
          <Link
            href="/statistics"
            className="hover:text-blue-600 transition-colors"
          >
            Statistics
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600 hidden sm:block">Welcome, Guest</p>
          <button className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

