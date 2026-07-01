import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Top Footer */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-green-500">
              🛒 SuperMart
            </h2>

            <p className="mt-5 leading-7">
              Fresh groceries, quality products and
              modern supermarket management for everyone.
            </p>

            <div className="flex gap-4 mt-8">

              <div className="bg-gray-800 hover:bg-green-600 transition w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="bg-gray-800 hover:bg-green-600 transition w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </div>

              <div className="bg-gray-800 hover:bg-green-600 transition w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                <FaTwitter />
              </div>

              <div className="bg-gray-800 hover:bg-green-600 transition w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                <FaLinkedinIn />
              </div>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link className="hover:text-green-500" to="/">
                Home
              </Link>

              <Link className="hover:text-green-500" to="/products">
                Products
              </Link>

              <Link className="hover:text-green-500" to="/services">
                Services
              </Link>

              <Link className="hover:text-green-500" to="/about">
                About
              </Link>

              <Link className="hover:text-green-500" to="/contact">
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Our Services
            </h3>

            <div className="space-y-3">

              <p>Inventory Management</p>

              <p>Sales Tracking</p>

              <p>Customer Management</p>

              <p>Reports & Analytics</p>

              <p>Secure Payments</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <MapPin className="text-green-500" />
                <span>Mogadishu, Somalia</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-500" />
                <span>+252 61 XXXXXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-green-500" />
                <span>info@supermart.com</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm">
            © 2026 SuperMart Management System. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link className="hover:text-green-500">
              Privacy Policy
            </Link>

            <Link className="hover:text-green-500">
              Terms & Conditions
            </Link>

            <Link className="hover:text-green-500">
              Support
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;