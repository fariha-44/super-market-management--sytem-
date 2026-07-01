
function CustomerTable({
  customers,
  loading,
  search,
  onEdit,
  onDelete,
}) {

  const filteredCustomers = customers.filter((customer) =>
    customer.customerName.toLowerCase().includes(search.toLowerCase()) ||
    customer.customerID.toString().includes(search)
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr className="text-left text-gray-600">

            <th className="p-4">ID</th>
            <th className="p-4">Customer Name</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Address</th>
            <th className="p-4 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {loading ? (

            <tr>

              <td
                colSpan="5"
                className="text-center p-8 text-gray-500"
              >
                Loading Customers...
              </td>

            </tr>

          ) : filteredCustomers.length === 0 ? (

            <tr>

              <td
                colSpan="5"
                className="text-center p-8 text-red-500"
              >
                No Customers Found
              </td>

            </tr>

          ) : (

            filteredCustomers.map((customer) => (

              <tr
                key={customer.customerID}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {customer.customerID}
                </td>

                <td className="p-4 font-medium">
                  {customer.customerName}
                </td>

                <td className="p-4">
                  {customer.phone}
                </td>

                <td className="p-4">
                  {customer.address}
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() => onEdit(customer)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(customer)}
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

export default CustomerTable;

