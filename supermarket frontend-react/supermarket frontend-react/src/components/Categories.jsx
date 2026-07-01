import { Link } from "react-router-dom";

import freshfruits from "../assets/freshfrits.png";
import bananas from "../assets/banans.png";
import bride from "../assets/bride.png";
import bakery from "../assets/bakery.png";
import chicken from "../assets/chicken.png";
import drinks from "../assets/drinks.png";

function Categories() {
  const categories = [
    { image: freshfruits, title: "Fresh Fruits", products: "120 Products", bg: "bg-green-100" },
    { image: bananas, title: "Bananas", products: "95 Products", bg: "bg-yellow-100" },
    { image: bride, title: "Rice", products: "80 Products", bg: "bg-blue-100" },
    { image: bakery, title: "Bakery", products: "60 Products", bg: "bg-orange-100" },
    { image: chicken, title: "Chicken", products: "75 Products", bg: "bg-red-100" },
    { image: drinks, title: "Drinks", products: "90 Products", bg: "bg-purple-100" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Shop By Category
          </h2>

          <p className="text-gray-500 mt-4">
            Fresh groceries delivered every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {categories.map((item, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center gap-6"
            >

              <div
                className={`${item.bg} w-36 h-36 rounded-3xl flex items-center justify-center overflow-hidden`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="flex-1">

                <h3 className="text-3xl font-bold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-green-600 font-semibold mt-3">
                  {item.products}
                </p>

                <Link
                  to="/products"
                  className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
                >
                  Shop Now →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;