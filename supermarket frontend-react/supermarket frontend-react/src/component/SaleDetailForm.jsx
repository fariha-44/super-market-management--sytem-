import { useEffect, useState } from "react";
import { validateSaleDetail } from "../utils/saleDetailValidation";

function SaleDetailForm({
  initialData = null,
  onSubmit,
  onCancel,
}) {

  const [formData, setFormData] = useState({
    saleID: "",
    productID: "",
    quantity: "",
    unitPrice: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {

    if (initialData) {

      setFormData({
        detailID: initialData.detailID,
        saleID: initialData.saleID,
        productID: initialData.productID,
        quantity: initialData.quantity,
        unitPrice: initialData.unitPrice,
      });

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

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors =
      validateSaleDetail(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit({
      ...formData,
      detailID: initialData?.detailID,
      saleID: Number(formData.saleID),
      productID: Number(formData.productID),
      quantity: Number(formData.quantity),
      unitPrice: Number(formData.unitPrice),
    });

  };

  const handleReset = () => {

    setFormData({
      saleID: "",
      productID: "",
      quantity: "",
      unitPrice: "",
    });

    setErrors({});

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* Sale ID */}

      <div>

        <label className="block font-medium mb-2">
          Sale ID
        </label>

        <input
          type="number"
          name="saleID"
          value={formData.saleID}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          placeholder="Enter Sale ID"
        />

        {errors.saleID && (
          <p className="text-red-500 text-sm mt-1">
            {errors.saleID}
          </p>
        )}

      </div>

      {/* Product ID */}

      <div>

        <label className="block font-medium mb-2">
          Product ID
        </label>

        <input
          type="number"
          name="productID"
          value={formData.productID}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          placeholder="Enter Product ID"
        />

        {errors.productID && (
          <p className="text-red-500 text-sm mt-1">
            {errors.productID}
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
          className="w-full border rounded-lg px-4 py-2"
          placeholder="Enter Quantity"
        />

        {errors.quantity && (
          <p className="text-red-500 text-sm mt-1">
            {errors.quantity}
          </p>
        )}

      </div>

      {/* Unit Price */}

      <div>

        <label className="block font-medium mb-2">
          Unit Price
        </label>

        <input
          type="number"
          step="0.01"
          name="unitPrice"
          value={formData.unitPrice}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          placeholder="Enter Unit Price"
        />

        {errors.unitPrice && (
          <p className="text-red-500 text-sm mt-1">
            {errors.unitPrice}
          </p>
        )}

      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-3 pt-3">

        <button
          type="button"
          onClick={handleReset}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg"
        >
          Reset
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          {initialData ? "Update" : "Save"}
        </button>

      </div>

    </form>

  );

}

export default SaleDetailForm;