
import { useEffect, useState } from "react";

import Sidebar from "../layouts/Sidebar";

import Modal from "../component/Modal";
import SaleForm from "../component/SaleForm";
import SaleTable from "../component/SaleTable";
import ConfirmDelete from "../component/ConfirmDelete";

import {
  getSales,
  addSale,
  updateSale,
  deleteSale,
} from "../Services/saleService";

function SalesPage() {

  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingSale, setEditingSale] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadSales();
  }, []);

  const loadSales = async () => {

    try {

      setLoading(true);

      const response = await getSales();

      setSales(response.data);

    } catch {

      alert("Unable to load sales.");

    } finally {

      setLoading(false);

    }

  };

  const handleSave = async (sale) => {

    try {

      if (editingSale) {

        await updateSale({
          saleID: editingSale.saleID,
          ...sale,
        });

        alert("Sale Updated Successfully");

      } else {

        await addSale(sale);

        alert("Sale Added Successfully");

      }

      await loadSales();

      setShowModal(false);

      setEditingSale(null);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Unable to save sale."
      );

    }

  };

  const handleEdit = (sale) => {

    setEditingSale(sale);

    setShowModal(true);

  };

  const handleDelete = (sale) => {

    setDeleteId(sale.saleID);

    setShowDelete(true);

  };

  const confirmDelete = async () => {

    try {

      await deleteSale(deleteId);

      alert("Sale Deleted Successfully");

      await loadSales();

      setShowDelete(false);

      setDeleteId(null);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Unable to delete sale."
      );

    }

  };

  const filteredSales = sales.filter((sale) =>
    sale.saleID.toString().includes(search) ||
    sale.customerID.toString().includes(search)
  );

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 ml-64">

        <div className="p-6">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h1 className="text-3xl font-bold">
                Sales
              </h1>

              <p className="text-gray-500">
                Manage Sales
              </p>

            </div>

            <button
              onClick={()=>{
                setEditingSale(null);
                setShowModal(true);
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              + Add Sale
            </button>

          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-6">

            <input
              type="text"
              placeholder="Search Sale..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
            />

          </div>

          <SaleTable
            sales={filteredSales}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

        </div>

      </div>

      <Modal
        isOpen={showModal}
        title={editingSale ? "Update Sale" : "Add Sale"}
        onClose={()=>{
          setShowModal(false);
          setEditingSale(null);
        }}
      >

        <SaleForm
          initialData={editingSale}
          onSubmit={handleSave}
          onCancel={()=>{
            setShowModal(false);
            setEditingSale(null);
          }}
        />

      </Modal>

      <ConfirmDelete
        isOpen={showDelete}
        title="Delete Sale"
        message="Are you sure you want to delete this sale?"
        onCancel={()=>setShowDelete(false)}
        onConfirm={confirmDelete}
      />

    </div>

  );
}

export default SalesPage;

