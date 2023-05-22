import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="body-font">
      <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          © 2023 Ben Verrill — 
        
          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/benverrill/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
