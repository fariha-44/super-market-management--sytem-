function SaleTable({
  sales,
  loading,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr className="text-left text-gray-600">

            <th className="p-4">ID</th>
            <th className="p-4">Customer ID</th>
            <th className="p-4">Sale Date</th>
            <th className="p-4">Total</th>
            <th className="p-4">Payment</th>
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
                Loading Sales...
              </td>

            </tr>

          ) : sales.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="text-center p-8 text-red-500"
              >
                No Sales Found
              </td>

            </tr>

          ) : (

            sales.map((sale) => (

              <tr
                key={sale.saleID}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">{sale.saleID}</td>

                <td className="p-4">{sale.customerID}</td>

                <td className="p-4">
                  {sale.saleDate?.substring(0,10)}
                </td>

                <td className="p-4 text-green-600 font-semibold">
                  ${sale.totalAmount}
                </td>

                <td className="p-4">
                  {sale.paymentMethod}
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() => onEdit(sale)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(sale)}
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

export default SaleTable;

