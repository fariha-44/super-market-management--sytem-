import fresh from "../assets/fresh.png";
import fastdelivery from "../assets/fastdelivary.png";
import price from "../assets/price.png";
import customer from "../assets/customer.png";

function WhyChooseUs() {

  const reasons = [

    {
      title: "Fresh & Quality Products",
      description:
        "We provide fresh fruits, vegetables, dairy products and groceries every day from trusted suppliers.",
      image: fresh,
    },

    {
      title: "Fast Delivery",
      description:
        "Get your groceries delivered quickly and safely right to your doorstep.",
      image: fastdelivery,
    },

    {
      title: "Affordable Prices",
      description:
        "Enjoy competitive prices and weekly discounts on hundreds of products.",
      image: price,
    },

    {
      title: "24/7 Customer Support",
      description:
        "Our friendly support team is always ready to assist you whenever you need help.",
      image: customer,
    },

  ];

  return (

    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Why Customers Love
            <span className="text-green-600"> SuperMart</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            We are committed to providing high-quality products,
            outstanding customer service and a convenient shopping experience
            for every customer.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              <div className="bg-green-50 h-56 flex items-center justify-center p-6">

                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-36 h-36 object-contain transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {reason.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default WhyChooseUs;