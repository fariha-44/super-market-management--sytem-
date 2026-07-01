
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">

      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold">
                Ready to Get Started?
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">

                Manage Your
                <span className="text-green-600">
                  {" "}Supermarket
                </span>

                <br />

                With Confidence

              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-6">

                Join SuperMart today and simplify inventory management,
                customer records, sales tracking, and reporting all in
                one modern system.

              </p>

            </div>

            {/* Right */}

            <div className="text-center lg:text-right">

              <Link
                to="/login"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition duration-300 shadow-lg"
              >
                Login Now
              </Link>

              <p className="text-gray-500 mt-6">
                Secure • Fast • Easy to Use
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CallToAction;

