import { useEffect, useState } from "react";
import { validateCustomer } from "../utils/customerValidation";

function CustomerForm({
  onSubmit,
  onCancel,
  initialData = null,
}) {

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {

    if (initialData) {

      setFormData({
        customerName: initialData.customerName || "",
        phone: initialData.phone || "",
        address: initialData.address || "",
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

    const validationErrors = validateCustomer(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0)
      return;

    onSubmit(formData);

  };

  const handleReset = () => {

    setFormData({
      customerName: "",
      phone: "",
      address: "",
    });

    setErrors({});

  };

  return (

    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Customer Name */}

      <div>

        <label className="block font-medium mb-2">
          Customer Name
        </label>

        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter Customer Name"
        />

        {errors.customerName &&
          <p className="text-red-500 text-sm mt-1">
            {errors.customerName}
          </p>
        }

      </div>

      {/* Phone */}

      <div>

        <label className="block font-medium mb-2">
          Phone
        </label>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter Phone Number"
        />

        {errors.phone &&
          <p className="text-red-500 text-sm mt-1">
            {errors.phone}
          </p>
        }

      </div>

      {/* Address */}

      <div>

        <label className="block font-medium mb-2">
          Address
        </label>

        <textarea
          rows="3"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter Address"
        />

        {errors.address &&
          <p className="text-red-500 text-sm mt-1">
            {errors.address}
          </p>
        }

      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-3 pt-4">

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
          Save Customer
        </button>

      </div>

    </form>

  );

}

export default CustomerForm;

