function ProductCard({ image, name, category, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <span className="text-sm text-green-600 font-semibold">
          {category}
        </span>

        <h3 className="text-xl font-bold mt-2">
          {name}
        </h3>

        <p className="text-2xl font-bold text-green-600 mt-3">
          ${price}
        </p>

        <button
          className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
        >
          View Product
        </button>

      </div>

    </div>
  );
}

export default ProductCard;