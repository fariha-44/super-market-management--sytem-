
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import {
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Truck,
  ShieldCheck,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Package size={45} />,
      title: "Inventory Management",
      description:
        "Manage your products and stock efficiently with an organized inventory system.",
    },
    {
      icon: <ShoppingCart size={45} />,
      title: "Sales Management",
      description:
        "Track every sale and monitor daily business performance easily.",
    },
    {
      icon: <Users size={45} />,
      title: "Customer Management",
      description:
        "Store customer information and build better customer relationships.",
    },
    {
      icon: <BarChart3 size={45} />,
      title: "Reports & Analytics",
      description:
        "Generate sales reports and business insights with one click.",
    },
    {
      icon: <Truck size={45} />,
      title: "Fast Delivery",
      description:
        "Provide quick and reliable grocery delivery to your customers.",
    },
    {
      icon: <ShieldCheck size={45} />,
      title: "Secure Payments",
      description:
        "Safe and trusted payment processing for every transaction.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* Hero */}

        <section
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542838132-92c53300491e')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

            <span className="bg-green-600 px-5 py-2 rounded-full font-semibold">
              OUR SERVICES
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6">
              Smart Solutions For <br /> Modern Supermarkets
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-gray-200">
              We help supermarkets manage inventory, customers,
              sales and reports using a modern management system.
            </p>

          </div>
        </section>

        {/* Services */}

        <section className="py-24 bg-gray-50">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <h2 className="text-4xl font-bold">
                What We Offer
              </h2>

              <p className="text-gray-500 mt-4">
                Everything your supermarket needs in one platform.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {services.map((service, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg border-t-4 border-green-600 p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6">

                    {service.icon}

                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {service.description}
                  </p>

                  <button className="mt-6 text-green-600 font-semibold hover:underline">
                    Learn More →
                  </button>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Statistics */}

        <section className="py-24 bg-white">

          <div className="max-w-6xl mx-auto px-6">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

              <div>
                <h2 className="text-5xl font-bold text-green-600">
                  500+
                </h2>
                <p className="mt-3 text-gray-600">
                  Products Managed
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-green-600">
                  300+
                </h2>
                <p className="mt-3 text-gray-600">
                  Happy Customers
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-green-600">
                  1200+
                </h2>
                <p className="mt-3 text-gray-600">
                  Sales Completed
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-green-600">
                  99%
                </h2>
                <p className="mt-3 text-gray-600">
                  Customer Satisfaction
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Call To Action */}

        <section className="py-24 bg-gradient-to-r from-green-700 to-green-500">

          <div className="max-w-5xl mx-auto text-center text-white px-6">

            <h2 className="text-5xl font-bold">
              Ready To Grow Your Business?
            </h2>

            <p className="mt-6 text-lg text-green-100">
              Login to our management system and start managing
              your supermarket professionally.
            </p>

            <Link
              to="/login"
              className="inline-block mt-10 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Login Dashboard
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Services;

