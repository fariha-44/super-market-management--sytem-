export const validateCustomer = (customer) => {

  const errors = {};

  if (!customer.customerName.trim()) {
    errors.customerName = "Customer Name is required";
  }
  else if (customer.customerName.length > 100) {
    errors.customerName =
      "Customer Name cannot exceed 100 characters";
  }

  if (!customer.phone.trim()) {
    errors.phone = "Phone is required";
  }
  else if (!/^[0-9+\-\s()]+$/.test(customer.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (!customer.address.trim()) {
    errors.address = "Address is required";
  }
  else if (customer.address.length > 200) {
    errors.address =
      "Address cannot exceed 200 characters";
  }

  return errors;
};