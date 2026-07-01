import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import hero from "../assets/about.png";
import man from "../assets/man.png";
import man2 from "../assets/man2.png";
import customer from "../assets/customer.png";

import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Leaf,
} from "lucide-react";

function About() {
  return (
    <>
      <Navbar />

      <main className="pt-24 bg-gray-50">

        {/* about */}

        <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-24">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <h1 className="text-5xl md:text-6xl font-extrabold">
              About SuperMart
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-green-100">
              Fresh groceries, affordable prices and modern supermarket
              management solutions designed to make shopping easier for everyone.
            </p>

          </div>

        </section>

        {/* Story */}

        <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <img
              src={hero}
              alt="About"
              className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500 w-full h-[500px] object-cover"
            />

            <div>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                Our Story
              </span>

              <h2 className="text-5xl font-bold mt-6">
                Fresh Food, Every Day
              </h2>

              <p className="mt-8 text-gray-600 leading-8 text-lg">
                SuperMart was created to provide customers with fresh groceries,
                quality products and affordable prices. We combine excellent
                customer service with modern technology to deliver the best
                shopping experience.
              </p>

              <p className="mt-6 text-gray-600 leading-8 text-lg">
                Our supermarket management system also helps businesses manage
                products, sales, customers and reports efficiently.
              </p>

            </div>

          </div>

        </section>

        {/* Mission & Vision */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500">

              <Target className="text-green-600" size={55} />

              <h2 className="text-3xl font-bold mt-6">
                Our Mission
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                To provide fresh groceries, outstanding customer service and
                innovative supermarket management solutions.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500">

              <Eye className="text-green-600" size={55} />

              <h2 className="text-3xl font-bold mt-6">
                Our Vision
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                To become one of the most trusted supermarket brands while
                leading the future of digital supermarket management.
              </p>

            </div>

          </div>

        </section>

        {/* Core Values */}

        <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-5xl font-bold text-center">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

              {[
                {
                  icon: <Heart size={45} />,
                  title: "Customer First",
                  text: "Everything we do starts with our customers."
                },
                {
                  icon: <Award size={45} />,
                  title: "Quality",
                  text: "Only the best products reach our shelves."
                },
                {
                  icon: <Leaf size={45} />,
                  title: "Freshness",
                  text: "Fresh fruits, vegetables and groceries every day."
                },
                {
                  icon: <Users size={45} />,
                  title: "Teamwork",
                  text: "Working together to deliver exceptional service."
                }
              ].map((item, index) => (

                <div
                  key={index}
                  className="group bg-gray-50 rounded-3xl p-8 shadow-lg hover:bg-green-600 hover:text-white transition-all duration-500 hover:-translate-y-3 text-center"
                >

                  <div className="flex justify-center text-green-600 group-hover:text-white transition">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold mt-6">
                    {item.title}
                  </h3>

                  <p className="mt-4">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Team */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-5xl font-bold text-center">
              Meet Our Team
            </h2>

            <p className="text-gray-500 text-center mt-5 text-lg">
              Passionate people behind SuperMart.
            </p>

            <div className="grid md:grid-cols-3 gap-10 mt-16">

              {[
                {
                  image: man,
                  name: "Ahmed Ali",
                  role: "Founder & CEO"
                },
                {
                  image: customer,
                  name: "Fatima Hassan",
                  role: "Store Manager"
                },
                {
                  image: man2,
                  name: "Mohamed Noor",
                  role: "Operations Manager"
                }
              ].map((member, index) => (

                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-4 hover:shadow-2xl transition-all duration-500"
                >

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-green-200 group-hover:scale-110 transition duration-500"
                  />

                  <h3 className="mt-6 text-2xl font-bold">
                    {member.name}
                  </h3>

                  <p className="text-green-600 font-semibold mt-2">
                    {member.role}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;