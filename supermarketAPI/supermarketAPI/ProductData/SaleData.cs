using Microsoft.Data.SqlClient;
using supermarketAPI.MODEL;
using System.Data;

namespace supermarketAPI.ProductData
{
    public class SaleData
    {
        string connectionstring = "Server=DESKTOP-R8Q5339;Initial Catalog=Supermarkett1DB;Integrated Security=True;TrustServerCertificate=True;";

        public List<Sale> GetSales()
        {
            List<Sale> data = new List<Sale>();

            using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                cnn.Open();

                string query = "SELECT * FROM Sales";

                SqlDataAdapter da = new SqlDataAdapter(query, cnn);
                DataTable dt = new DataTable();

                da.Fill(dt);

                foreach (DataRow item in dt.Rows)
                {
                    data.Add(new Sale
                    {
                        SaleID = Convert.ToInt32(item["SaleID"]),
                        CustomerID = Convert.ToInt32(item["CustomerID"]),
                        SaleDate = Convert.ToDateTime(item["SaleDate"]),
                        TotalAmount = Convert.ToDecimal(item["TotalAmount"]),
                        PaymentMethod = item["PaymentMethod"].ToString()
                    });
                }

                return data;
            }
        }
        public Sale GetSaleById(int id)
        {
            Sale data = null;


using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                string query = "SELECT * FROM Sales WHERE SaleID=@id";

                SqlCommand cmd = new SqlCommand(query, cnn);

                cmd.Parameters.AddWithValue("@id", id);

                cnn.Open();

                SqlDataReader dr = cmd.ExecuteReader();

                if (dr.Read())
                {
                    data = new Sale
                    {
                        SaleID = Convert.ToInt32(dr["SaleID"]),
                        CustomerID = Convert.ToInt32(dr["CustomerID"]),
                        SaleDate = Convert.ToDateTime(dr["SaleDate"]),
                        TotalAmount = Convert.ToDecimal(dr["TotalAmount"]),
                        PaymentMethod = dr["PaymentMethod"].ToString()
                    };
                }
            }

            return data;


}


        public void InsertSale(Sale data)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);


             cnn.Open();

            string checkCustomer =
            "SELECT COUNT(*) FROM Customers WHERE CustomerID=@CustomerID";

            SqlCommand checkCmd =
            new SqlCommand(checkCustomer, cnn);

            checkCmd.Parameters.AddWithValue(
            "@CustomerID",
            data.CustomerID);

            int exists = (int)checkCmd.ExecuteScalar();

            if (exists == 0)
            {
                cnn.Close();
                throw new Exception("Customer Not Found");
            }

            string query = @"INSERT INTO Sales
                 (CustomerID, SaleDate, TotalAmount, PaymentMethod)
                 VALUES
                 (@CustomerID, @SaleDate, @TotalAmount, @PaymentMethod)";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@CustomerID", data.CustomerID);
            cmd.Parameters.AddWithValue("@SaleDate", data.SaleDate);
            cmd.Parameters.AddWithValue("@TotalAmount", data.TotalAmount);
            cmd.Parameters.AddWithValue("@PaymentMethod", data.PaymentMethod);

            cmd.ExecuteNonQuery();

            cnn.Close();


}

        public bool UpdateSale(Sale data)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);

            string query = @"UPDATE Sales
                             SET CustomerID=@CustomerID,
                                 SaleDate=@SaleDate,
                                 PaymentMethod=@PaymentMethod,
                                 TotalAmount=@TotalAmount
                             WHERE SaleID=@SaleID";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@SaleID", data.SaleID);
            cmd.Parameters.AddWithValue("@CustomerID", data.CustomerID);
            cmd.Parameters.AddWithValue("@SaleDate", data.SaleDate);
            cmd.Parameters.AddWithValue("@TotalAmount", data.TotalAmount);
            cmd.Parameters.AddWithValue("@PaymentMethod", data.PaymentMethod);

            cnn.Open();

            int rowsAffected = cmd.ExecuteNonQuery();

            cnn.Close();

            return rowsAffected > 0;
        }

        public bool DeleteSale(int id)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);

            string query = "DELETE FROM Sales WHERE SaleID=@id";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@id", id);

            cnn.Open();

            int rowsAffected = cmd.ExecuteNonQuery();

            cnn.Close();

            return rowsAffected > 0;
        }
        public List<Sale> SearchSales(int customerId)
        {
            List<Sale> data = new List<Sale>();


            using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                string query =
                "SELECT * FROM Sales WHERE CustomerID = @CustomerID";

                SqlCommand cmd = new SqlCommand(query, cnn);

                cmd.Parameters.AddWithValue("@CustomerID", customerId);

                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();

                da.Fill(dt);

                foreach (DataRow item in dt.Rows)
                {
                    data.Add(new Sale
                    {
                        SaleID = Convert.ToInt32(item["SaleID"]),
                        CustomerID = Convert.ToInt32(item["CustomerID"]),
                        SaleDate = Convert.ToDateTime(item["SaleDate"]),
                        TotalAmount = Convert.ToDecimal(item["TotalAmount"]),
                        PaymentMethod = item["PaymentMethod"].ToString()
                    });
                }
            }

            return data;


        }
    }
}
