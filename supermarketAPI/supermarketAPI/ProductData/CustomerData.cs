using Microsoft.Data.SqlClient;
using supermarketAPI.MODEL;
using System.Data;

namespace supermarketAPI.ProductData
{
    public class CustomerData
    {
        string connectionstring = "Server=DESKTOP-R8Q5339;Initial Catalog=Supermarkett1DB;Integrated Security=True;TrustServerCertificate=True;";

        public List<Customer> GetCustomers()
        {
            List<Customer> data = new List<Customer>();

            using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                cnn.Open();

                string query = "SELECT * FROM Customers";

                SqlDataAdapter da = new SqlDataAdapter(query, cnn);
                DataTable dt = new DataTable();

                da.Fill(dt);

                foreach (DataRow item in dt.Rows)
                {
                    data.Add(new Customer
                    {
                        CustomerID = Convert.ToInt32(item["CustomerID"]),
                        CustomerName = item["CustomerName"].ToString(),
                        Phone = item["Phone"].ToString(),
                        Address = item["Address"].ToString()
                    });
                }

                return data;
            }
        }
        public Customer GetCustomerById(int id)
        {
            Customer data = null;


using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                string query = "SELECT * FROM Customers WHERE CustomerID=@id";

                SqlCommand cmd = new SqlCommand(query, cnn);

                cmd.Parameters.AddWithValue("@id", id);

                cnn.Open();

                SqlDataReader dr = cmd.ExecuteReader();

                if (dr.Read())
                {
                    data = new Customer
                    {
                        CustomerID = Convert.ToInt32(dr["CustomerID"]),
                        CustomerName = dr["CustomerName"].ToString(),
                        Phone = dr["Phone"].ToString(),
                        Address = dr["Address"].ToString()
                    };
                }
            }

            return data;

}


        public void InsertCustomer(Customer data)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);

            cnn.Open();

            string checkPhone =
            "SELECT COUNT(*) FROM Customers WHERE Phone=@Phone";

            SqlCommand checkCmd =
            new SqlCommand(checkPhone, cnn);

            checkCmd.Parameters.AddWithValue("@Phone", data.Phone);

            int exists = (int)checkCmd.ExecuteScalar();

            if (exists > 0)
            {
                cnn.Close();
                throw new Exception("Phone number already exists");
            }

            string query = @"INSERT INTO Customers
                    (CustomerName, Phone, Address)
                    VALUES
                    (@CustomerName, @Phone, @Address)";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@CustomerName", data.CustomerName);
            cmd.Parameters.AddWithValue("@Phone", data.Phone);
            cmd.Parameters.AddWithValue("@Address", data.Address);

            cmd.ExecuteNonQuery();

            cnn.Close();
        }

        public bool UpdateCustomer(Customer data)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);

            string query = @"UPDATE Customers
                             SET CustomerName=@CustomerName,
                                 Phone=@Phone,
                                 Address=@Address
                             WHERE CustomerID=@CustomerID";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@CustomerID", data.CustomerID);
            cmd.Parameters.AddWithValue("@CustomerName", data.CustomerName);
            cmd.Parameters.AddWithValue("@Phone", data.Phone);
            cmd.Parameters.AddWithValue("@Address", data.Address);

            cnn.Open();

            int rowsAffected = cmd.ExecuteNonQuery();

            cnn.Close();

            return rowsAffected > 0;
        }

        public bool DeleteCustomer(int id)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);

            string query = "DELETE FROM Customers WHERE CustomerID=@id";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@id", id);

            cnn.Open();

            int rowsAffected = cmd.ExecuteNonQuery();

            cnn.Close();

            return rowsAffected > 0;
        }

        public List<Customer> SearchCustomers(string name)
        {
            List<Customer> data = new List<Customer>();
            using (SqlConnection cnn = new SqlConnection(connectionstring))
            {
                string query =
                "SELECT * FROM Customers WHERE CustomerName LIKE @name";

                SqlCommand cmd = new SqlCommand(query, cnn);

                cmd.Parameters.AddWithValue("@name", "%" + name + "%");

                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();

                da.Fill(dt);

                foreach (DataRow item in dt.Rows)
                {
                    data.Add(new Customer
                    {
                        CustomerID = Convert.ToInt32(item["CustomerID"]),
                        CustomerName = item["CustomerName"].ToString(),
                        Phone = item["Phone"].ToString(),
                        Address = item["Address"].ToString()
                    });
                }
            }

            return data;





        }

    }
}

