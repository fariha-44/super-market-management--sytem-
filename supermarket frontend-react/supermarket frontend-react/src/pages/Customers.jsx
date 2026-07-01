
import { useEffect, useState } from "react";

import Sidebar from "../layouts/Sidebar";

import Modal from "../component/Modal";
import CustomerForm from "../component/CustomerForm";
import CustomerTable from "../component/CustomerTable";
import ConfirmDelete from "../component/ConfirmDelete";

import {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "../Services/customerService";

function Customers() {

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {

    try {

      setLoading(true);

      const response = await getCustomers();

      setCustomers(response.data);

    } catch (error) {

      console.error(error);
      alert("Unable to load customers.");

    } finally {

      setLoading(false);

    }

  };

  const handleSave = async (customer) => {

    try {

      if (editingCustomer) {

        await updateCustomer({
          ...customer,
          customerID: editingCustomer.customerID,
        });
        alert("✅ Customer Updated Successfully!");

      } else {

        await addCustomer(customer);

      }
alert("✅ Customer Added Successfully!");
      await loadCustomers();

      setShowModal(false);
      setEditingCustomer(null);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Unable to save customer."
      );
    
      

    }

  };

  const handleEdit = (customer) => {

    setEditingCustomer(customer);

    setShowModal(true);
    

  };

  const handleDelete = (customer) => {

    setDeleteId(customer.customerID);

    setShowDelete(true);

  };

  const confirmDelete = async () => {

    try {

      await deleteCustomer(deleteId);

      await loadCustomers();

      setShowDelete(false);

      setDeleteId(null);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Unable to delete customer."
      );

    }

  };

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 ml-64">

        <div className="p-6">

          {/* Header */}

          <div className="flex justify-between items-center mb-6">

            <div>

              <h1 className="text-3xl font-bold text-gray-800">
                Customers
              </h1>

              <p className="text-gray-500 mt-1">
                Manage all supermarket customers
              </p>

            </div>

            <button
              onClick={() => {

                setEditingCustomer(null);

                setShowModal(true);

              }}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium"
            >
              + Add Customer
            </button>

          </div>

          {/* Search */}

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">

            <input
              type="text"
              placeholder="Search Customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          <CustomerTable
            customers={customers}
            loading={loading}
            search={search}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

        </div>

      </div>

      {/* Add / Update */}

      <Modal
        isOpen={showModal}
        title={
          editingCustomer
            ? "Update Customer"
            : "Add Customer"
        }
        onClose={() => {

          setShowModal(false);

          setEditingCustomer(null);

        }}
      >

        <CustomerForm
          initialData={editingCustomer}
          onSubmit={handleSave}
          onCancel={() => {

            setShowModal(false);

            setEditingCustomer(null);

          }}
        />

      </Modal>

      {/* Delete */}

      <ConfirmDelete
        isOpen={showDelete}
        title="Delete Customer"
        message="Are you sure you want to delete this customer?"
        onCancel={() => setShowDelete(false)}
        onConfirm={confirmDelete}
      />

    </div>

  );

}

export default Customers;

