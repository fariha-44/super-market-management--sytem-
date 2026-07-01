import { useEffect, useState } from "react";

import Sidebar from "../layouts/Sidebar";

import Modal from "../component/Modal";
import ProductForm from "../component/ProductForm";
import ProductTable from "../component/ProductTable";
import ConfirmDelete from "../component/ConfirmDelete";

import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../Services/productService";

function Productsspage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);

      const response = await getProducts();

      setProducts(response.data);
    } catch (error) {
      console.error(error);
      alert("Unable to load products.");
    } finally {
      setLoading(false);
    }
  };

 const handleSave = async (product) => {
  try {

    if (editingProduct) {

      await updateProduct(product);

      alert("✅ Product Updated Successfully!");

    } else {

      await addProduct(product);

      alert("✅ Product Added Successfully!");

    }

    setShowModal(false);
    setEditingProduct(null);

    await loadProducts();

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Unable to save product."
    );

  }
};

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleDelete = (product) => {
    setDeleteId(product.productID);
    setShowDelete(true);
  };

  const confirmDelete = async () => {
  try {

    await deleteProduct(deleteId);

    alert("✅ Product Deleted Successfully!");

    setShowDelete(false);
    setDeleteId(null);

    await loadProducts();

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Unable to delete product."
    );

  }
};

 const filteredProducts = products.filter((product) =>
  product.productName.toLowerCase().includes(search.toLowerCase()) ||
  product.productID.toString().includes(search)
);

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 ml-64">

        <div className="p-6">

          {/* Header */}

          <div className="flex justify-between items-center mb-6">

            <div>

              <h1 className="text-3xl font-bold text-gray-800">
                Products
              </h1>

              <p className="text-gray-500 mt-1">
                Manage all supermarket products
              </p>

            </div>

            <button
              onClick={() => {
                setEditingProduct(null);
                setShowModal(true);
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium"
            >
              + Add Product
            </button>

          </div>

          {/* Search */}

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">

            <input
              type="text"
              placeholder="Search Product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          {/* Product Table */}

          <ProductTable
            products={filteredProducts}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

        </div>

      </div>

      {/* Add / Edit */}

      <Modal
        isOpen={showModal}
        title={
          editingProduct
            ? "Update Product"
            : "Add Product"
        }
        onClose={() => {
          setShowModal(false);
          setEditingProduct(null);
        }}
      >
        <ProductForm
          initialData={editingProduct}
          onSubmit={handleSave}
          onCancel={() => {
            setShowModal(false);
            setEditingProduct(null);
          }}
        />
      </Modal>

      {/* Delete */}

      <ConfirmDelete
        isOpen={showDelete}
        title="Delete Product"
        message="Are you sure you want to delete this product?"
        onCancel={() => setShowDelete(false)}
        onConfirm={confirmDelete}
      />

    </div>
  );
}

export default Productsspage;