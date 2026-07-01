import { useEffect, useState } from "react";
import { validateProduct } from "../utils/productValidation";

function ProductForm({
  onSubmit,
  onCancel,
  initialData = null,
}) {

  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    price: "",
    quantity: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {

    if (initialData) {

      setFormData({
        productName: initialData.productName || "",
        category: initialData.category || "",
        price: initialData.price || "",
        quantity: initialData.quantity || "",
      });

    } else {

      resetForm();

    }

  }, [initialData]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

  };

  const resetForm = () => {

    setFormData({
      productName: "",
      category: "",
      price: "",
      quantity: "",
    });

    setErrors({});

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validateProduct(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0)
      return;

    const product = {
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    };

    if (initialData) {
      product.productID = initialData.productID;
    }

    onSubmit(product);

    if (!initialData) {
      resetForm();
    }

  };

  return (

    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Product Name */}

      <div>

        <label className="block font-medium mb-2">
          Product Name
        </label>

        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          placeholder="Enter Product Name"
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />

        {errors.productName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.productName}
          </p>
        )}

      </div>

      {/* Category */}

      <div>

        <label className="block font-medium mb-2">
          Category
        </label>

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter Category"
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />

        {errors.category && (
          <p className="text-red-500 text-sm mt-1">
            {errors.category}
          </p>
        )}

      </div>

      {/* Price */}

      <div>

        <label className="block font-medium mb-2">
          Price
        </label>

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter Price"
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />

        {errors.price && (
          <p className="text-red-500 text-sm mt-1">
            {errors.price}
          </p>
        )}

      </div>

      {/* Quantity */}

      <div>

        <label className="block font-medium mb-2">
          Quantity
        </label>

        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Enter Quantity"
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />

        {errors.quantity && (
          <p className="text-red-500 text-sm mt-1">
            {errors.quantity}
          </p>
        )}

      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-3 pt-4">

        <button
          type="button"
          onClick={() => {
            resetForm();
            onCancel();
          }}
          className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          {initialData ? "Update Product" : "Save Product"}
        </button>

      </div>

    </form>

  );

}

export default ProductForm;