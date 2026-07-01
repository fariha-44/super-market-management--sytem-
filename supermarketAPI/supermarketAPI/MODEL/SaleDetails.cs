using System.ComponentModel.DataAnnotations;

namespace supermarketAPI.MODEL
{
    public class SaleDetails
    {
        public int DetailID { get; set; }


    [Required(ErrorMessage = "Sale ID is required")]
        public int SaleID { get; set; }

        [Required(ErrorMessage = "Product ID is required")]
        public int ProductID { get; set; }

        [Range(1, int.MaxValue,
            ErrorMessage = "Quantity must be greater than 0")]
        public int Quantity { get; set; }

        [Range(0.01, double.MaxValue,
            ErrorMessage = "Unit Price must be greater than 0")]
        public decimal UnitPrice { get; set; }
    }


}
