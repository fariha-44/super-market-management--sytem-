
export const validateSale = (sale) => {

  const errors = {};

  if (!sale.customerID)
    errors.customerID = "Customer is required";

  if (!sale.saleDate)
    errors.saleDate = "Sale Date is required";

  if (!sale.totalAmount)
    errors.totalAmount = "Total Amount is required";
  else if (sale.totalAmount <= 0)
    errors.totalAmount =
      "Total Amount must be greater than zero";

  if (!sale.paymentMethod.trim())
    errors.paymentMethod =
      "Payment Method is required";

  return errors;

};

