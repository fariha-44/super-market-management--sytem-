function ProductTable({
  products,
  loading,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-gray-500">
        Loading Products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-red-500">
        No Products Found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr className="text-left text-gray-600">

            <th className="p-4">ID</th>
            <th className="p-4">Product</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product.productID}
              className="border-t hover:bg-gray-50"
            >

              <td className="p-4">
                {product.productID}
              </td>

              <td className="p-4 font-medium">
                {product.productName}
              </td>

              <td className="p-4">
                {product.category}
              </td>

              <td className="p-4 text-green-600 font-semibold">
                ${product.price}
              </td>

              <td className="p-4">
                {product.quantity}
              </td>

              <td className="p-4 text-center">

                <button
                  onClick={() => onEdit(product)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(product)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProductTable;