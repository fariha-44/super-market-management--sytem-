function PaymentSummary({ sales }) {

  const summary = {};

  sales.forEach((sale) => {

    if (summary[sale.paymentMethod]) {

      summary[sale.paymentMethod]++;

    } else {

      summary[sale.paymentMethod] = 1;

    }

  });

  return (

    <div className="bg-white rounded-xl shadow p-6 overflow-x-auto w-full">

      <h2 className="text-2xl font-bold mb-6">
        Payment Summary
      </h2>

      <table className="w-full table-auto">

        <thead>

          <tr className="border-b text-gray-600">

            <th className="text-left py-3 px-2">
              Payment Method
            </th>

            <th className="text-left py-3 px-2">
              Transactions
            </th>

          </tr>

        </thead>

        <tbody>

          {Object.entries(summary).map(([method, count]) => (

            <tr
              key={method}
              className="border-b hover:bg-gray-50"
            >

              <td className="py-3 px-2">
                {method}
              </td>

              <td className="px-2">
                {count}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default PaymentSummary;