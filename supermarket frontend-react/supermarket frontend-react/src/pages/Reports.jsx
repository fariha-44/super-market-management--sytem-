import { useEffect, useState } from "react";

import Sidebar from "../layouts/Sidebar";

import SalesReportTable from "../component/SalesReportTable";
import LowStockTable from "../component/LowStockTable";
import PaymentSummary from "../component/PaymentSummary";

import { getProducts } from "../Services/productService";
import { getSales } from "../Services/saleService";

function ReportsPage() {

  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {

    try {

      setLoading(true);

      const productResponse = await getProducts();
      const salesResponse = await getSales();

      setProducts(productResponse.data);
      setSales(salesResponse.data);

    } catch (error) {

      console.error(error);
      alert("Unable to load reports.");

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="flex bg-gray-100 min-h-screen">

        <Sidebar />

        <main className="flex-1 ml-64 flex justify-center items-center">

          <h1 className="text-2xl font-bold text-gray-600">
            Loading Reports...
          </h1>

        </main>

      </div>

    );

  }

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <main className="flex-1 ml-64 p-6 space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            Reports
          </h1>

          <p className="text-gray-500 mt-2">
            Supermarket Reports & Statistics
          </p>

        </div>

        {/* Sales Report */}

        <SalesReportTable sales={sales} />

        {/* Low Stock Products */}

        <LowStockTable products={products} />

        {/* Payment Summary */}

        <PaymentSummary sales={sales} />

      </main>

    </div>

  );

}

export default ReportsPage;