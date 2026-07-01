using System.ComponentModel.DataAnnotations;

namespace supermarketAPI.MODEL
{
    public class Customer
    {
        public int CustomerID { get; set; }

        [Required(ErrorMessage = "Customer Name is required")]
        [StringLength(100, ErrorMessage = "Customer Name cannot exceed 100 characters")]
        public string CustomerName { get; set; }

        [Required(ErrorMessage = "Phone is required")]
        [Phone(ErrorMessage = "Invalid phone number")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Address is required")]
        [StringLength(200, ErrorMessage = "Address cannot exceed 200 characters")]
        public string Address { get; set; }
    }
}

