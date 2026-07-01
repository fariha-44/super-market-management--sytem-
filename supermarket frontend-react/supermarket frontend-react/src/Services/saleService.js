
import api from "../API/APIS";

// Get All
export const getSales = () => {
  return api.get("/Sale");
};

// Get By Id
export const getSaleById = (id) => {
  return api.get(`/Sale/${id}`);
};

// Search
export const searchSales = (customerId) => {
  return api.get(`/Sale/search/${customerId}`);
};

// Add
export const addSale = (sale) => {
  return api.post("/Sale", sale);
};

// Update
export const updateSale = (sale) => {
  return api.put("/Sale", sale);
};

// Delete
export const deleteSale = (id) => {
  return api.delete(`/Sale/${id}`);
};
