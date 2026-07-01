function SalesReportTable({ sales }) {
  return (
<div className="w-full bg-white rounded-xl shadow p-6 mb-8 overflow-x-auto">

      <h2 className="text-2xl font-bold mb-6">
        Sales Report
      </h2>

      <table className="w-full table-auto">

        <thead>
          <tr className="border-b text-gray-600">
            <th className="text-left py-3 px-2">Sale ID</th>
            <th className="text-left py-3 px-2">Customer</th>
            <th className="text-left py-3 px-2">Date</th>
            <th className="text-left py-3 px-2">Payment</th>
            <th className="text-left py-3 px-2">Total</th>
          </tr>
        </thead>

        <tbody>

          {sales.map((sale) => (

            <tr
              key={sale.saleID}
              className="border-b hover:bg-gray-50"
            >

              <td className="py-3 px-2">
                {sale.saleID}
              </td>

              <td className="px-2">
                {sale.customerID}
              </td>

              <td className="px-2">
                {sale.saleDate.substring(0,10)}
              </td>

              <td className="px-2">
                {sale.paymentMethod}
              </td>

              <td className="px-2 text-green-600 font-semibold">
                ${sale.totalAmount}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default SalesReportTable;