import man from "../assets/man.png";
import woman from "../assets/customer.png";
import man2 from "../assets/man2.png";

function Testimonials() {

  const testimonials = [

    {
      name: "Ahmed Hassan",
      role: "Regular Customer",
      image: man,
      comment:
        "SuperMart always provides fresh products and excellent customer service. Shopping here is always a great experience.",
    },

    {
      name: "Amina Ali",
      role: "Business Owner",
      image: woman,
      comment:
        "The supermarket management system is simple, fast and reliable. It has made managing our store much easier.",
    },

    {
      name: "Mohamed Noor",
      role: "Restaurant Owner",
      image: man2,
      comment:
        "Affordable prices, quality products and quick delivery. I highly recommend SuperMart.",
    },

  ];

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="bg-green-100 text-green-600 px-5 py-2 rounded-full font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-6 text-gray-900">

            What Our

            <span className="text-green-600">
              {" "}Customers Say
            </span>

          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">

            Hear from customers who trust SuperMart
            for quality products and excellent customer service.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border hover:-translate-y-2"
            >

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-green-500"
                />

                <div>

                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-green-600 font-medium">
                    {item.role}
                  </p>

                </div>

              </div>

              <div className="mt-6 text-yellow-400 text-xl">

                ⭐⭐⭐⭐⭐

              </div>

              <p className="text-gray-600 leading-8 mt-5 italic">

                "{item.comment}"

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Testimonials;