using System.ComponentModel.DataAnnotations;

namespace supermarketAPI.MODEL
{
    public class Sale
    {
        public int SaleID { get; set; }

        [Required(ErrorMessage = "Customer ID is required")]
        public int CustomerID { get; set; }

        [Required(ErrorMessage = "Sale Date is required")]
        public DateTime SaleDate { get; set; }

        [Range(0.01, double.MaxValue,
            ErrorMessage = "Total Amount must be greater than 0")]
        public decimal TotalAmount { get; set; }

        [Required(ErrorMessage = "Payment Method is required")]
        public string PaymentMethod { get; set; }
    }
}