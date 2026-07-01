import api from "../API/APIS";

// Get All Products
export const getProducts = async () => {
  return await api.get("/Products");
};

// Get Product By ID
export const getProductById = async (id) => {
  return await api.get(`/Products/${id}`);
};

// Search Products
export const searchProducts = async (name) => {
  return await api.get(`/Products/search/${name}`);
};

// Add Product
export const addProduct = async (product) => {
  return await api.post("/Products", product);
};

// Update Product
export const updateProduct = async (product) => {
  return await api.put("/Products", product);
};

// Delete Product
export const deleteProduct = async (id) => {
  return await api.delete(`/Products/${id}`);
};