using System.ComponentModel.DataAnnotations;

namespace supermarketAPI.MODEL
{
    public class Product
    {
        public int ProductID { get; set; }

        [Required(ErrorMessage = "Product Name is required")]
        public string ProductName { get; set; }

        [Required(ErrorMessage = "Category is required")]
        public string Category { get; set; }

        [Range(0.01, 1000000, ErrorMessage = "Price must be greater than 0")]
        public decimal Price { get; set; }

        [Range(1, 1000000, ErrorMessage = "Quantity must be greater than 0")]
        public int Quantity { get; set; }
    }
}