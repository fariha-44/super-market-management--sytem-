
import { useEffect, useState } from "react";
import { validateSale } from "../utils/saleValidation";

function SaleForm({
  initialData = null,
  onSubmit,
  onCancel,
}) {
  const [formData, setFormData] = useState({
    customerID: "",
    saleDate: "",
    totalAmount: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        saleID: initialData.saleID,
        customerID: initialData.customerID,
        saleDate: initialData.saleDate
          ? initialData.saleDate.substring(0, 10)
          : "",
        totalAmount: initialData.totalAmount,
        paymentMethod: initialData.paymentMethod,
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

    const validation = validateSale(formData);

    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    onSubmit({
      ...formData,
      customerID: Number(formData.customerID),
      totalAmount: Number(formData.totalAmount),
    });
  };

  const handleReset = () => {
    setFormData({
      customerID: "",
      saleDate: "",
      totalAmount: "",
      paymentMethod: "",
    });

    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <label className="block mb-2 font-medium">
          Customer ID
        </label>

        <input
          type="number"
          name="customerID"
          value={formData.customerID}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />

        {errors.customerID && (
          <p className="text-red-500 text-sm">
            {errors.customerID}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Sale Date
        </label>

        <input
          type="date"
          name="saleDate"
          value={formData.saleDate}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />

        {errors.saleDate && (
          <p className="text-red-500 text-sm">
            {errors.saleDate}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Total Amount
        </label>

        <input
          type="number"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />

        {errors.totalAmount && (
          <p className="text-red-500 text-sm">
            {errors.totalAmount}
          </p>
        )}
      </div>

      {/* Payment Method */}

<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Payment Method
  </label>

  <select
    name="paymentMethod"
    value={formData.paymentMethod}
    onChange={handleChange}
    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
  >
    <option value="">Select Payment Method</option>
    <option value="Cash">Cash</option>
    <option value="EVC Plus">EVC Plus</option>
    <option value="Premier Bank">Premier Bank</option>
    <option value="Salaam Bank">Salaam Bank</option>
    <option value="Zaad">Zaad</option>
    <option value="Card">Card</option>
  </select>

  {errors.paymentMethod && (
    <p className="text-red-500 text-sm mt-1">
      {errors.paymentMethod}
    </p>
  )}
</div>

      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={handleReset}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Save Sale
        </button>

      </div>

    </form>
  );
}

export default SaleForm;

