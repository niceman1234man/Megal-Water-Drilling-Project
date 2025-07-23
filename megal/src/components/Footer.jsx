import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-16 pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="font-bold text-lg mb-3">Megal Water Drilling</h3>
          <p className="text-sm text-gray-300">
            Delivering sustainable water solutions across Ethiopia with modern
            drilling technology and expert teams.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1 text-gray-300">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Contact Info</h4>
          <p className="text-sm text-gray-300">📞 +251 911 123 456</p>
          <p className="text-sm text-gray-300">📧 info@megaldrilling.com</p>
          <p className="text-sm text-gray-300">📍 Bole, Addis Ababa</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-gray-200">🌐 Facebook</a>
            <a href="#" className="hover:text-gray-200">📸 Instagram</a>
            <a href="#" className="hover:text-gray-200">🐦 Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10 border-t pt-4">
        &copy; {new Date().getFullYear()} Megal Water Drilling. All rights reserved.
      </div>
    </footer>
  );
}
