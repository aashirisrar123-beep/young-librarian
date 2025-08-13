"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-gray-300 dark:bg-gray-800 dark:text-gray-400">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            {/* Placeholder for Logo */}
            <span className="font-bold text-lg text-blue-400">YourBrand</span>
            <nav className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
          <div className="flex space-x-4">
            {/* Placeholder Social Icons */}
            <Link href="#" className="hover:text-white transition-colors">🐦</Link>
            <Link href="#" className="hover:text-white transition-colors">👋</Link>
            <Link href="#" className="hover:text-white transition-colors">💻</Link>
          </div>
        </div>
        <div className="border-t border-gray-700 dark:border-gray-600 pt-6">
          <p>
            © {currentYear} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
