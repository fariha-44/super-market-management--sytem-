function ReportCards({
  totalProducts,
  totalCustomers,
  totalSales,
  revenue,
}) {
  return (
    <div className="grid grid-cols-4 gap-5 mb-8">

      <div className="bg-white p-5 rounded-xl shadow border-l-4 border-green-500">
        <p className="text-gray-500 text-sm">Products</p>
        <h2 className="text-3xl font-bold">{totalProducts}</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-500">
        <p className="text-gray-500 text-sm">Customers</p>
        <h2 className="text-3xl font-bold">{totalCustomers}</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500">
        <p className="text-gray-500 text-sm">Sales</p>
        <h2 className="text-3xl font-bold">{totalSales}</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow border-l-4 border-purple-500">
        <p className="text-gray-500 text-sm">Revenue</p>
        <h2 className="text-3xl font-bold text-green-600">
          ${revenue.toFixed(2)}
        </h2>
      </div>

    </div>
  );
}

export default ReportCards;