"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact-me" },
  ];

  // 🧠 Fungsi untuk handle klik link
  const handleNavClick = (href) => {
    setIsOpen(false);

    // Jika halaman saat ini adalah /about dan klik lagi /about
    if (pathname === href) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900/70 backdrop-blur-md text-white z-50">
      <div className="flex flex-col md:flex-row justify-between items-center my-auto mx-4 xl:mx-40 lg:mx-16 md:mx-8 py-8">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <img src="/assets/img/logo2.svg" alt="Logo" className="h-5" />
          </div>

          {/* Tombol menu mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-10 text-sm font-extralight">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="relative group"
            >
              <span className="transition-colors duration-300 group-hover:text-gray-300">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Tombol CV */}
        <div className="hidden md:block">
          <a
            href="https://drive.google.com/file/d/1k0uE6EenM16kKBRlrfbfsWDGn2nSD5Bl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all text-sm font-extralight"
          >
            Connect to My CV
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-neutral-900/70 text-white flex flex-col items-center space-y-6 py-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-gray-300 transition-colors"
              >
                {link.name}
              </button>
            ))}

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all text-sm font-extralight"
            >
              Connect to My CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
