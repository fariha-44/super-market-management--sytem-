import { useEffect, useState } from "react";

import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";

import { getProducts } from "../Services/productService";
import { getCustomers } from "../Services/customerService";
import { getSales } from "../Services/saleService";

function Dashboard() {

  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [sales, setSales] = useState([]);

  const [revenue, setRevenue] = useState(0);

  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      setLoading(true);

      const productResponse = await getProducts();
      const customerResponse = await getCustomers();
      const salesResponse = await getSales();

      const sortedSales = salesResponse.data.sort(
        (a, b) => b.saleID - a.saleID
      );

      setProducts(productResponse.data);
      setCustomers(customerResponse.data);
      setSales(sortedSales);

      const totalRevenue = sortedSales.reduce(
        (sum, sale) => sum + Number(sale.totalAmount),
        0
      );

      setRevenue(totalRevenue);

    }
    catch (error) {

      console.error(error);

    }
    finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="bg-gray-100 min-h-screen">

        <Sidebar />

        <main className="ml-64 pt-20 flex justify-center items-center">

          <h2 className="text-2xl font-bold">
            Loading Dashboard...
          </h2>

        </main>

      </div>

    );

  }

  return (

    <div className="bg-gray-100 min-h-screen">

      <Sidebar />

      <main className="ml-64 pt-20 p-6">

        <Topbar />

        <div className="mb-8">

         <h1 className="text-4xl font-bold">
  Welcome,
  <span className="text-green-600">
    {" "}
    {user?.fullName}
  </span>
</h1>

<p className="text-gray-500 mt-2">
  Role:
  <span className="ml-2 font-bold text-blue-600">
    {user?.role}
  </span>
</p>

          <p className="text-gray-500 mt-2">
            Supermarket Management Dashboard
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-4 gap-5 mb-8">

          <div className="bg-white rounded-xl shadow border-l-4 border-green-500 p-5">

            <p className="text-xs uppercase text-gray-500">
              Products
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {products.length}
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow border-l-4 border-blue-500 p-5">

            <p className="text-xs uppercase text-gray-500">
              Customers
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {customers.length}
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow border-l-4 border-orange-500 p-5">

            <p className="text-xs uppercase text-gray-500">
              Sales
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {sales.length}
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow border-l-4 border-purple-500 p-5">

            <p className="text-xs uppercase text-gray-500">
              Revenue
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">

              ${revenue.toLocaleString()}

            </h2>

          </div>

        </div>

        {/* Recent Sales */}

        <div className="bg-white rounded-xl shadow p-6 mb-8 overflow-x-auto">

          <h2 className="text-xl font-bold mb-5">

            Recent Sales

          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b text-gray-500">

                <th className="text-left py-3">Sale ID</th>
                <th className="text-left py-3">Customer</th>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Payment</th>
                <th className="text-left py-3">Total</th>

              </tr>

            </thead>

            <tbody>

              {sales.slice(0,5).map(sale => (

                <tr
                  key={sale.saleID}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="py-4">
                    #{sale.saleID}
                  </td>

                  <td>
                    {sale.customerID}
                  </td>

                  <td>
                    {sale.saleDate.substring(0,10)}
                  </td>

                  <td>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">

                      {sale.paymentMethod}

                    </span>

                  </td>

                  <td className="font-semibold text-green-600">

                    ${sale.totalAmount}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Products */}

        <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">

          <h2 className="text-xl font-bold mb-5">

            Product Stock

          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b text-gray-500">

                <th className="text-left py-3">Product</th>
                <th className="text-left py-3">Category</th>
                <th className="text-left py-3">Price</th>
                <th className="text-left py-3">Stock</th>

              </tr>

            </thead>

            <tbody>

              {products.slice(0,5).map(product => (

                <tr
                  key={product.productID}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="py-4">
                    {product.productName}
                  </td>

                  <td>
                    {product.category}
                  </td>

                  <td>

                    ${product.price}

                  </td>

                  <td className={
                    product.quantity <= 10
                    ? "text-red-600 font-bold"
                    : "text-green-600"
                  }>

                    {product.quantity}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>

  );

}

export default Dashboard;