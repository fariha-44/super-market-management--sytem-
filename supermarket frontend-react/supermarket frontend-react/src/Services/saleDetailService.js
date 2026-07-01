import api from "../API/APIS";

// Get All
export const getSaleDetails = () =>
  api.get("/SaleDetails");

// Get By Id
export const getSaleDetailById = (id) =>
  api.get(`/SaleDetails/${id}`);

// Search
export const searchSaleDetails = (productId) =>
  api.get(`/SaleDetails/search/${productId}`);

// Insert
export const addSaleDetail = (saleDetail) =>
  api.post("/SaleDetails", saleDetail);

// Update
export const updateSaleDetail = (saleDetail) =>
  api.put("/SaleDetails", saleDetail);

// Delete
export const deleteSaleDetail = (id) =>
  api.delete(`/SaleDetails/${id}`);