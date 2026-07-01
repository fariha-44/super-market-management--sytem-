
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-white pt-32 pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <p className="text-green-600 text-xl font-semibold mb-6">

              🛒 Smart Supermarket Solution

            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">

              Manage Your

              <span className="block text-green-600 mt-2">

                SuperMarket

              </span>

              <span className="block">

                Like A Pro

              </span>

            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">

              Simplify your supermarket operations with one powerful
              management system. Easily manage products, customers,
              sales, inventory and reports from one beautiful dashboard.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/login"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300"
              >
                Get Started
              </Link>

              <Link
                to="/about"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                Learn More
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200"
              alt="SuperMarket"
              className="rounded-3xl shadow-2xl w-full hover:scale-105 transition duration-500"
            />

            {/* Floating Badge */}

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4">

              <p className="text-green-600 font-bold text-2xl">

                500+

              </p>

              <p className="text-gray-600 text-sm">

                Products Available

              </p>

            </div>

            <div className="absolute top-6 -right-6 bg-green-600 text-white rounded-2xl shadow-xl px-6 py-4">

              <p className="font-bold text-lg">

                ⭐ Trusted

              </p>

              <p className="text-sm">

                By Local Businesses

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;

