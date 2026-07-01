import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="pt-28 bg-gray-50">

        {/* Heading */}

        <section className="py-12 md:py-16">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Contact Us
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold">
              We'd Love To Hear From You
            </h1>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
              Have questions, suggestions, or need support?
              Our team is always ready to help you.
            </p>

          </div>

        </section>

        {/* Contact */}

        <section className="pb-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">

            {/* Contact Info */}

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold mb-10">
                Get In Touch
              </h2>

              <div className="space-y-8">

                {/* Address */}

                <div className="flex items-center gap-5 hover:translate-x-2 transition">

                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">

                    <MapPin className="text-green-600" />

                  </div>

                  <div>

                    <h3 className="font-bold text-lg">
                      Address
                    </h3>

                    <p className="text-gray-500">
                      Mogadishu, Somalia
                    </p>

                  </div>

                </div>

                {/* Phone */}

                <div className="flex items-center gap-5 hover:translate-x-2 transition">

                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">

                    <Phone className="text-green-600" />

                  </div>

                  <div>

                    <h3 className="font-bold text-lg">
                      Phone
                    </h3>

                    <p className="text-gray-500">
                      +252 61 XXXXXXXX
                    </p>

                  </div>

                </div>

                {/* Email */}

                <div className="flex items-center gap-5 hover:translate-x-2 transition">

                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">

                    <Mail className="text-green-600" />

                  </div>

                  <div>

                    <h3 className="font-bold text-lg">
                      Email
                    </h3>

                    <p className="text-gray-500">
                      info@supermart.com
                    </p>

                  </div>

                </div>

                {/* Hours */}

                <div className="flex items-center gap-5 hover:translate-x-2 transition">

                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">

                    <Clock className="text-green-600" />

                  </div>

                  <div>

                    <h3 className="font-bold text-lg">
                      Business Hours
                    </h3>

                    <p className="text-gray-500">
                      Monday - Saturday
                    </p>

                    <p className="text-gray-500">
                      8:00 AM - 10:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Form */}

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold mb-8">
                Send Message
              </h2>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 resize-none focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                ></textarea>

                <button
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-semibold transition shadow-lg hover:scale-105"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </section>

        {/* Map */}

        <section className="pb-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-bold text-center mb-10">
              Find Us On The Map
            </h2>

            <iframe
              className="w-full h-[300px] md:h-[500px] rounded-3xl shadow-2xl"
              src="https://www.google.com/maps?q=Mogadishu,Somalia&output=embed"
              loading="lazy"
            ></iframe>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}

export default Contact;