using Microsoft.Data.SqlClient;
using supermarketAPI.MODEL;


using System.Data;

namespace SupermarketAPI.Data
{
    public class ProductData
    {
        string connectionstring = "Server=DESKTOP-R8Q5339;Initial Catalog=Supermarkett1DB;Integrated Security=True;TrustServerCertificate=True;";

        public List<Product> GetProducts()
        {
            List<Product> data = new List<Product>();

            using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                cnn.Open();

                string query = "SELECT * FROM Products";

                SqlDataAdapter da = new SqlDataAdapter(query, cnn);

                DataTable dt = new DataTable();

                da.Fill(dt);

                foreach (DataRow item in dt.Rows)
                {
                    data.Add(new Product
                    {
                        ProductID = Convert.ToInt32(item["ProductID"]),
                        ProductName = item["ProductName"].ToString(),
                        Category = item["Category"].ToString(),
                        Price = Convert.ToDecimal(item["Price"]),
                        Quantity = Convert.ToInt32(item["Quantity"])
                    });
                }

                return data;
            }
        }
        public Product GetProductById(int id)
        {
            Product data = null;

            using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                string query = "SELECT * FROM Products WHERE ProductID=@id";

                SqlCommand cmd = new SqlCommand(query, cnn);

                cmd.Parameters.AddWithValue("@id", id);

                cnn.Open();

                SqlDataReader dr = cmd.ExecuteReader();

                if (dr.Read())
                {
                    data = new Product
                    {
                        ProductID = Convert.ToInt32(dr["ProductID"]),
                        ProductName = dr["ProductName"].ToString(),
                        Category = dr["Category"].ToString(),
                        Price = Convert.ToDecimal(dr["Price"]),
                        Quantity = Convert.ToInt32(dr["Quantity"])
                    };
                }
            }

            return data;

        }
        public List<Product> SearchProducts(string name)
        {
            List<Product> data = new List<Product>();

            using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                string query =
                "SELECT * FROM Products WHERE ProductName LIKE @name";

                SqlCommand cmd = new SqlCommand(query, cnn);

                cmd.Parameters.AddWithValue("@name", "%" + name + "%");

                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();

                da.Fill(dt);

                foreach (DataRow item in dt.Rows)
                {
                    data.Add(new Product
                    {
                        ProductID = Convert.ToInt32(item["ProductID"]),
                        ProductName = item["ProductName"].ToString(),
                        Category = item["Category"].ToString(),
                        Price = Convert.ToDecimal(item["Price"]),
                        Quantity = Convert.ToInt32(item["Quantity"])
                    });
                }
            }

            return data;
        }

        public void InsertProduct(Product data)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);

            string query = @"INSERT INTO Products
                           (ProductName, Category, Price, Quantity)
                           VALUES
                           (@ProductName, @Category, @Price, @Quantity)";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@ProductName", data.ProductName);
            cmd.Parameters.AddWithValue("@Category", data.Category);
            cmd.Parameters.AddWithValue("@Price", data.Price);
            cmd.Parameters.AddWithValue("@Quantity", data.Quantity);

            cnn.Open();

            cmd.ExecuteNonQuery();

            cnn.Close();
        }

        public bool UpdateProduct(Product data)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);

            string query = @"UPDATE Products
                             SET ProductName=@ProductName,
                                 Category=@Category,
                                 Price=@Price,
                                 Quantity=@Quantity
                             WHERE ProductID=@ProductID";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@ProductID", data.ProductID);
            cmd.Parameters.AddWithValue("@ProductName", data.ProductName);
            cmd.Parameters.AddWithValue("@Category", data.Category);
            cmd.Parameters.AddWithValue("@Price", data.Price);
            cmd.Parameters.AddWithValue("@Quantity", data.Quantity);

            cnn.Open();

            int rowsAffected = cmd.ExecuteNonQuery();

            cnn.Close();

            return rowsAffected > 0;
        }

        public bool DeleteProduct(int id)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);

            string query = "DELETE FROM Products WHERE ProductID=@id";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@id", id);

            cnn.Open();

            int rowsAffected = cmd.ExecuteNonQuery();

            cnn.Close();

            return rowsAffected > 0;
        }
    }
}