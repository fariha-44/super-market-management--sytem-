export const validateProduct = (formData) => {
  let errors = {};

  // Product Name
  if (!formData.productName.trim()) {
    errors.productName = "Product Name is required";
  }

  // Category
  if (!formData.category.trim()) {
    errors.category = "Category is required";
  }

  // Price
  if (formData.price === "") {
    errors.price = "Price is required";
  } else if (Number(formData.price) <= 0) {
    errors.price = "Price must be greater than 0";
  }

  // Quantity
  if (formData.quantity === "") {
    errors.quantity = "Quantity is required";
  } else if (Number(formData.quantity) <= 0) {
    errors.quantity = "Quantity must be greater than 0";
  }

  return errors;
};