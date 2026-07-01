using Microsoft.Data.SqlClient;
using supermarketAPI.MODEL;
using System.Data;

namespace supermarketAPI.ProductData
{
    public class SaleDetailData
    {
        string connectionstring = "Server=DESKTOP-R8Q5339;Initial Catalog=Supermarkett1DB;Integrated Security=True;TrustServerCertificate=True;";

        public List<SaleDetails> GetSaleDetails()
        {
            List<SaleDetails> data = new List<SaleDetails>();

            using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                cnn.Open();

                string query = "SELECT * FROM SaleDetails";

                SqlDataAdapter da = new SqlDataAdapter(query, cnn);

                DataTable dt = new DataTable();

                da.Fill(dt);

                foreach (DataRow item in dt.Rows)
                {
                    data.Add(new SaleDetails
                    {
                        DetailID = Convert.ToInt32(item["DetailID"]),
                        SaleID = Convert.ToInt32(item["SaleID"]),
                        ProductID = Convert.ToInt32(item["ProductID"]),
                        Quantity = Convert.ToInt32(item["Quantity"]),
                        UnitPrice = Convert.ToDecimal(item["UnitPrice"])
                    });
                }

                return data;
            }
        }
        public SaleDetails GetSaleDetailById(int id)
        {
            SaleDetails data = null;


using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                string query = "SELECT * FROM SaleDetails WHERE DetailID=@id";

                SqlCommand cmd = new SqlCommand(query, cnn);

                cmd.Parameters.AddWithValue("@id", id);

                cnn.Open();

                SqlDataReader dr = cmd.ExecuteReader();

                if (dr.Read())
                {
                    data = new SaleDetails
                    {
                        DetailID = Convert.ToInt32(dr["DetailID"]),
                        SaleID = Convert.ToInt32(dr["SaleID"]),
                        ProductID = Convert.ToInt32(dr["ProductID"]),
                        Quantity = Convert.ToInt32(dr["Quantity"]),
                        UnitPrice = Convert.ToDecimal(dr["UnitPrice"])
                    };
                }
            }

            return data;


}

        public void InsertSaleDetail(SaleDetails data)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);


cnn.Open();

            string checkSale =
            "SELECT COUNT(*) FROM Sales WHERE SaleID=@SaleID";

            SqlCommand saleCmd =
            new SqlCommand(checkSale, cnn);

            saleCmd.Parameters.AddWithValue(
            "@SaleID",
            data.SaleID);

            int saleExists = (int)saleCmd.ExecuteScalar();

            if (saleExists == 0)
            {
                cnn.Close();
                throw new Exception("Sale Not Found");
            }

            string checkProduct =
            "SELECT COUNT(*) FROM Products WHERE ProductID=@ProductID";

            SqlCommand productCmd =
            new SqlCommand(checkProduct, cnn);

            productCmd.Parameters.AddWithValue(
            "@ProductID",
            data.ProductID);

            int productExists = (int)productCmd.ExecuteScalar();

            if (productExists == 0)
            {
                cnn.Close();
                throw new Exception("Product Not Found");
            }

            string query = @"INSERT INTO SaleDetails
                 (SaleID, ProductID, Quantity, UnitPrice)
                 VALUES
                 (@SaleID, @ProductID, @Quantity, @UnitPrice)";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@SaleID", data.SaleID);
            cmd.Parameters.AddWithValue("@ProductID", data.ProductID);
            cmd.Parameters.AddWithValue("@Quantity", data.Quantity);
            cmd.Parameters.AddWithValue("@UnitPrice", data.UnitPrice);

            cmd.ExecuteNonQuery();

            cnn.Close();

}

        public bool UpdateSaleDetail(SaleDetails data)
        {
            try
            {
                SqlConnection cnn = new SqlConnection(connectionstring);

                string query = @"UPDATE SaleDetails
                         SET SaleID=@SaleID,
                             ProductID=@ProductID,
                             Quantity=@Quantity,
                             UnitPrice=@UnitPrice
                         WHERE DetailID=@DetailID";

                SqlCommand cmd = new SqlCommand(query, cnn);

                cmd.Parameters.AddWithValue("@DetailID", data.DetailID);
                cmd.Parameters.AddWithValue("@SaleID", data.SaleID);
                cmd.Parameters.AddWithValue("@ProductID", data.ProductID);
                cmd.Parameters.AddWithValue("@Quantity", data.Quantity);
                cmd.Parameters.AddWithValue("@UnitPrice", data.UnitPrice);

                cnn.Open();

                int rowsAffected = cmd.ExecuteNonQuery();

                cnn.Close();

                return rowsAffected > 0;
            }
            catch (SqlException ex)
            {
                if (ex.Message.Contains("FK"))
                {
                    throw new Exception("Sale ID or Product ID does not exist.");
                }

                throw new Exception("Unable to update Sale Detail.");
            }
        }

        public bool DeleteSaleDetail(int id)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);

            string query = "DELETE FROM SaleDetails WHERE DetailID=@id";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@id", id);

            cnn.Open();

            int rowsAffected = cmd.ExecuteNonQuery();

            cnn.Close();

            return rowsAffected > 0;
        }
    
    public List<SaleDetails> SearchSaleDetails(int productId)
        {
            List<SaleDetails> data = new List<SaleDetails>();

            using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                string query =
                "SELECT * FROM SaleDetails WHERE ProductID = @ProductID";

                SqlCommand cmd = new SqlCommand(query, cnn);

                cmd.Parameters.AddWithValue("@ProductID", productId);

                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();

                da.Fill(dt);

                foreach (DataRow item in dt.Rows)
                {
                    data.Add(new SaleDetails
                    {
                        DetailID = Convert.ToInt32(item["DetailID"]),
                        SaleID = Convert.ToInt32(item["SaleID"]),
                        ProductID = Convert.ToInt32(item["ProductID"]),
                        Quantity = Convert.ToInt32(item["Quantity"]),
                        UnitPrice = Convert.ToDecimal(item["UnitPrice"])
                    });
                }
            }

            return data;


        }
    }
    }
