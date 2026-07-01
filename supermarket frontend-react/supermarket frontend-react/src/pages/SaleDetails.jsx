import { useEffect, useState } from "react";

import Sidebar from "../layouts/Sidebar";

import Modal from "../component/Modal";
import SaleDetailForm from "../component/SaleDetailForm";
import SaleDetailTable from "../component/SaleDetailTable";
import ConfirmDelete from "../component/ConfirmDelete";

import {
  getSaleDetails,
  addSaleDetail,
  updateSaleDetail,
  deleteSaleDetail,
} from "../Services/saleDetailService";

function SaleDetailsPage() {

  const [saleDetails, setSaleDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingDetail, setEditingDetail] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadSaleDetails();
  }, []);

  const loadSaleDetails = async () => {

    try {

      setLoading(true);

      const response = await getSaleDetails();

      setSaleDetails(response.data);

    } catch (error) {

      console.error(error);

      alert("Unable to load Sale Details.");

    } finally {

      setLoading(false);

    }

  };

  const handleSave = async (detail) => {

    try {

      if (editingDetail) {

        await updateSaleDetail({
          detailID: editingDetail.detailID,
          ...detail,
        });

        alert("Sale Detail Updated Successfully");

      } else {

        await addSaleDetail(detail);

        alert("Sale Detail Added Successfully");

      }

      await loadSaleDetails();

      setShowModal(false);

      setEditingDetail(null);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Unable to save Sale Detail."
      );

    }

  };

  const handleEdit = (detail) => {

    setEditingDetail(detail);

    setShowModal(true);

  };

  const handleDelete = (detail) => {

    setDeleteId(detail.detailID);

    setShowDelete(true);

  };

  const confirmDelete = async () => {

    try {

      await deleteSaleDetail(deleteId);

      alert("Sale Detail Deleted Successfully");

      await loadSaleDetails();

      setDeleteId(null);

      setShowDelete(false);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Unable to delete Sale Detail."
      );

    }

  };

  const filteredSaleDetails = saleDetails.filter(
    (detail) =>
      detail.detailID.toString().includes(search) ||
      detail.productID.toString().includes(search)
  );

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 ml-64">

        <div className="p-6">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h1 className="text-3xl font-bold text-gray-800">
                Sale Details
              </h1>

              <p className="text-gray-500 mt-1">
                Manage all Sale Details
              </p>

            </div>

            <button
              onClick={() => {

                setEditingDetail(null);

                setShowModal(true);

              }}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              + Add Sale Detail
            </button>

          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">

            <input
              type="text"
              placeholder="Search Detail ID or Product ID..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          <SaleDetailTable
            saleDetails={filteredSaleDetails}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
                  </div>

      </div>

      {/* Add / Edit Modal */}

      <Modal
        isOpen={showModal}
        title={
          editingDetail
            ? "Update Sale Detail"
            : "Add Sale Detail"
        }
        onClose={() => {
          setShowModal(false);
          setEditingDetail(null);
        }}
      >

        <SaleDetailForm
          initialData={editingDetail}
          onSubmit={handleSave}
          onCancel={() => {
            setShowModal(false);
            setEditingDetail(null);
          }}
        />

      </Modal>

      {/* Delete Confirmation */}

      <ConfirmDelete
        isOpen={showDelete}
        title="Delete Sale Detail"
        message="Are you sure you want to delete this Sale Detail?"
        onCancel={() => {
          setShowDelete(false);
          setDeleteId(null);
        }}
        onConfirm={confirmDelete}
      />

    </div>

  );

}

export default SaleDetailsPage;