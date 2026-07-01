function LowStockTable({ products }) {

  const lowStock =
    products.filter(product => product.quantity <= 10);

  return (

    <div className="bg-white rounded-xl shadow p-6 mb-8 overflow-x-auto w-full">

      <h2 className="text-2xl font-bold mb-6">
        Low Stock Products
      </h2>

      <table className="w-full table-auto">

        <thead>

          <tr className="border-b text-gray-600">

            <th className="text-left py-3 px-2">
              Product
            </th>

            <th className="text-left py-3 px-2">
              Category
            </th>

            <th className="text-left py-3 px-2">
              Stock
            </th>

          </tr>

        </thead>

        <tbody>

          {lowStock.length > 0 ? (

            lowStock.map(product => (

              <tr
                key={product.productID}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-3 px-2">
                  {product.productName}
                </td>

                <td className="px-2">
                  {product.category}
                </td>

                <td className="px-2 text-red-600 font-bold">
                  {product.quantity}
                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="3"
                className="text-center py-6 text-gray-500"
              >
                No Low Stock Products
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}

export default LowStockTable;