"use client";
import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu(); // Close the menu after clicking a link
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex-shrink-0 flex items-center justify-center mr-4">
            <Image
              src="/v-logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <a
            href="#about"
            className="ml-3 title-font font-medium text-white mb-4 md:mb-0"
          >
            Ben Verrill
          </a>
        </div>
        <nav
          className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="mr-5 text-white hover:underline focus:outline-none"
          >
            Past Work
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="mr-5 text-white hover:underline focus:outline-none"
          >
            Skills
          </button>
        </nav>
        <button
          onClick={() => scrollToSection("contact")}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-white hover:underline rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
        <button
          className="inline-block md:hidden ml-auto outline-none focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6 text-white" />
          ) : (
            <MenuIcon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
