using Microsoft.Data.SqlClient;
using supermarketAPI.MODEL;

namespace supermarketAPI.ProductData
{
    public class UserData
    {
        string connectionstring = "Server=DESKTOP-R8Q5339;Initial Catalog=Supermarkett1DB;Integrated Security=True;TrustServerCertificate=True;";

        public User Login(Login login)
        {
            SqlConnection cnn = new SqlConnection(connectionstring);

            string query = @"SELECT *
                             FROM Users
                             WHERE Username=@Username
                             AND Password=@Password";

            SqlCommand cmd = new SqlCommand(query, cnn);

            cmd.Parameters.AddWithValue("@Username", login.Username);
            cmd.Parameters.AddWithValue("@Password", login.Password);

            cnn.Open();

            SqlDataReader reader = cmd.ExecuteReader();

            User user = null;

            if (reader.Read())
            {
                user = new User();

                user.UserID = Convert.ToInt32(reader["UserID"]);
                user.FullName = reader["FullName"].ToString();
                user.Username = reader["Username"].ToString();
                user.Role = reader["Role"].ToString();
            }

            cnn.Close();

            return user;
        }
    }
}