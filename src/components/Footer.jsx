// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-bold ml-2">Code Conquerors</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end">
            <a href="/" className="text-gray-400 hover:text-white mx-2">
              About
            </a>
            <a href="/" className="text-gray-400 hover:text-white mx-2">
              Privacy Policy
            </a>
            <a href="/" className="text-gray-400 hover:text-white mx-2">
              Contact
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center text-gray-400">
          © 2023 Code Conquerors. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
