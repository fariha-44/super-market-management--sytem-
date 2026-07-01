using Microsoft.AspNetCore.Mvc;
using supermarketAPI.MODEL;
using supermarketAPI.ProductData;

namespace supermarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleDetailsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetSaleDetails()
        {
            try
            {
                SaleDetailData obj = new SaleDetailData();

                return Ok(obj.GetSaleDetails());
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
            SaleDetailData obj = new SaleDetailData();

            var result = obj.GetSaleDetailById(id);

            if (result == null)
            {
                return NotFound(new
                {
                    Status = 404,
                    Message = "Sale Detail Not Found"
                });
            }

            return Ok(result);
        }

        [HttpGet("search/{productId}")]
        public IActionResult Search(int productId)
        {
            try
            {
                SaleDetailData obj = new SaleDetailData();

                var result = obj.SearchSaleDetails(productId);

                if (result.Count == 0)
                {
                    return NotFound(new
                    {
                        Status = 404,
                        Message = "No Sale Details Found"
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
        public IActionResult InsertSaleDetail(SaleDetails data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                SaleDetailData obj = new SaleDetailData();

                obj.InsertSaleDetail(data);

                return Ok(new
                {
                    Status = 200,
                    Message = "Sale Detail Added Successfully"
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
        public IActionResult Update(SaleDetails data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                SaleDetailData obj = new SaleDetailData();

                bool result = obj.UpdateSaleDetail(data);

                if (result)
                {
                    return Ok(new
                    {
                        Status = 200,
                        Message = "Sale Detail Updated Successfully"
                    });
                }

                return NotFound(new
                {
                    Status = 404,
                    Message = "Sale Detail Not Found"
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
                SaleDetailData obj = new SaleDetailData();

                bool result = obj.DeleteSaleDetail(id);

                if (result)
                {
                    return Ok(new
                    {
                        Status = 200,
                        Message = "Sale Detail Deleted Successfully"
                    });
                }

                return NotFound(new
                {
                    Status = 404,
                    Message = "Sale Detail Not Found"
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
    }
}