import api from "../API/APIS";

// Get All Customers
export const getCustomers = async () => {
  return await api.get("/Customers");
};

// Get Customer By ID
export const getCustomerById = async (id) => {
  return await api.get(`/Customers/${id}`);
};

// Search Customer
export const searchCustomers = async (name) => {
  return await api.get(`/Customers/search/${name}`);
};

// Add Customer
export const addCustomer = async (customer) => {
  return await api.post("/Customers", customer);
};

// Update Customer
export const updateCustomer = async (customer) => {
  return await api.put("/Customers", customer);
};

// Delete Customer
export const deleteCustomer = async (id) => {
  return await api.delete(`/Customers/${id}`);
};