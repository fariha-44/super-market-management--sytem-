export const validateSaleDetail = (data) => {
  const errors = {};

  if (!data.saleID)
    errors.saleID = "Sale ID is required";

  if (!data.productID)
    errors.productID = "Product ID is required";

  if (!data.quantity || data.quantity <= 0)
    errors.quantity = "Quantity must be greater than 0";

  if (!data.unitPrice || data.unitPrice <= 0)
    errors.unitPrice = "Unit Price must be greater than 0";

  return errors;
};