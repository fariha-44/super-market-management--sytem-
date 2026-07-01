using Microsoft.AspNetCore.Mvc;
using supermarketAPI.MODEL;
using SupermarketAPI.Data;

namespace SupermarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase

    {
        [HttpGet]
        public IActionResult GetProducts()
        {
            try
            {
                ProductData obj = new ProductData();
                return Ok(obj.GetProducts());
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    Status = 500,
                    Message = ex.Message
                });
            }
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            ProductData obj = new ProductData();

var result = obj.GetProductById(id);

            if (result == null)
            {
                return NotFound(new
                {
                    Status = 404,
                    Message = "Product Not Found"
                });
            }

            return Ok(result);


}


        [HttpGet("search/{name}")]
        public IActionResult Search(string name)
        {
            try
            {
                ProductData obj = new ProductData();

                var result = obj.SearchProducts(name);

                if (result.Count == 0)
                {
                    return NotFound(new
                    {
                        Status = 404,
                        Message = "No Products Found"
                    });
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    Status = 500,
                    Message = ex.Message
                });
            }
        }

        [HttpPost]
        public IActionResult InsertProduct(Product data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                ProductData obj = new ProductData();

                obj.InsertProduct(data);

                return Ok(new
                {
                    Status = 200,
                    Message = "Product Added Successfully"
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    Status = 500,
                    Message = ex.Message
                });
            }
        }

        [HttpPut]
        public IActionResult Update(Product data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                ProductData obj = new ProductData();

                bool result = obj.UpdateProduct(data);

                if (result)
                {
                    return Ok(new
                    {
                        Status = 200,
                        Message = "Product Updated Successfully"
                    });
                }

                return NotFound(new
                {
                    Status = 404,
                    Message = "Product Not Found"
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    Status = 500,
                    Message = ex.Message
                });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                ProductData obj = new ProductData();

                bool result = obj.DeleteProduct(id);

                if (result)
                {
                    return Ok(new
                    {
                        Status = 200,
                        Message = "Product Deleted Successfully"
                    });
                }

                return NotFound(new
                {
                    Status = 404,
                    Message = "Product Not Found"
                });
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("FK_") ||
                    ex.Message.Contains("conflicted with the REFERENCE constraint"))
                {
                    return BadRequest(new
                    {
                        Status = 400,
                        Message = "This Product is used in SaleDetails table. Delete related SaleDetails first."
                    });
                }

                return StatusCode(500, new
                {
                    Status = 500,
                    Message = ex.Message
                });
            }
        }
        }
    }

   