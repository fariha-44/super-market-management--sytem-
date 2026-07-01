function SaleDetailTable({
  saleDetails,
  loading,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr className="text-left text-gray-600">
            <th className="p-4">Detail ID</th>
            <th className="p-4">Sale ID</th>
            <th className="p-4">Product ID</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Unit Price</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan="6"
                className="text-center p-8 text-gray-500"
              >
                Loading Sale Details...
              </td>
            </tr>
          ) : saleDetails.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center p-8 text-red-500"
              >
                No Sale Details Found
              </td>
            </tr>
          ) : (
            saleDetails.map((detail) => (
              <tr
                key={detail.detailID}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4">
                  {detail.detailID}
                </td>

                <td className="p-4">
                  {detail.saleID}
                </td>

                <td className="p-4">
                  {detail.productID}
                </td>

                <td className="p-4">
                  {detail.quantity}
                </td>

                <td className="p-4 font-semibold text-green-600">
                  ${detail.unitPrice}
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => onEdit(detail)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(detail)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SaleDetailTable;