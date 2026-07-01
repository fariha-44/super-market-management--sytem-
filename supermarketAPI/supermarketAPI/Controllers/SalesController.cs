using Microsoft.AspNetCore.Mvc;
using supermarketAPI.MODEL;
using supermarketAPI.ProductData;

namespace supermarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetSales()
        {
            try
            {
                SaleData obj = new SaleData();

            return Ok(obj.GetSales());
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
            SaleData obj = new SaleData();


var result = obj.GetSaleById(id);

            if (result == null)
            {
                return NotFound(new
                {
                    Status = 404,
                    Message = "Sale Not Found"
                });
            }

            return Ok(result);

}

        [HttpGet("search/{customerId}")]
        public IActionResult Search(int customerId)
        {
            try
            {
                SaleData obj = new SaleData();

                var result = obj.SearchSales(customerId);

                if (result.Count == 0)
                {
                    return NotFound(new
                    {
                        Status = 404,
                        Message = "No Sales Found For This Customer"
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
        public IActionResult InsertSale(Sale data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                SaleData obj = new SaleData();

                obj.InsertSale(data);

                return Ok(new
                {
                    Status = 200,
                    Message = "Sale Added Successfully"
                });
            }
           catch (Exception ex)
{
    return BadRequest(new
    {
        Status = 400,
        Message = ex.Message
    });
            }
        }

        [HttpPut]
        public IActionResult Update(Sale data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                SaleData obj = new SaleData();

                bool result = obj.UpdateSale(data);

                if (result)
                {
                    return Ok(new
                    {
                        Status = 200,
                        Message = "Sale Updated Successfully"
                    });
                }

                return NotFound(new
                {
                    Status = 404,
                    Message = "Sale Not Found"
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
                SaleData obj = new SaleData();

                bool result = obj.DeleteSale(id);

                if (result)
                {
                    return Ok(new
                    {
                        Status = 200,
                        Message = "Sale Deleted Successfully"
                    });
                }

                return NotFound(new
                {
                    Status = 404,
                    Message = "Sale Not Found"
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
                        Message = "This Sale is used in SaleDetails table. Delete related SaleDetails first."
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

