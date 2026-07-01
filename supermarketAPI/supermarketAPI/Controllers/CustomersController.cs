using Microsoft.AspNetCore.Mvc;
using supermarketAPI.MODEL;
using supermarketAPI.ProductData;

namespace supermarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCustomers()
        {
            try
            {
                CustomerData obj = new CustomerData();


            return Ok(obj.GetCustomers());
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
            CustomerData obj = new CustomerData();


var result = obj.GetCustomerById(id);

            if (result == null)
            {
                return NotFound(new
                {
                    Status = 404,
                    Message = "Customer Not Found"
                });
            }

            return Ok(result);


}


        [HttpGet("search/{name}")]
        public IActionResult Search(string name)
        {
            try
            {
                CustomerData obj = new CustomerData();

                var result = obj.SearchCustomers(name);

                if (result.Count == 0)
                {
                    return NotFound(new
                    {
                        Status = 404,
                        Message = "No Customers Found"
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
        public IActionResult InsertCustomer(Customer data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                CustomerData obj = new CustomerData();

                obj.InsertCustomer(data);

                return Ok(new
                {
                    Status = 200,
                    Message = "Customer Added Successfully"
                });
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("already exists"))
                {
                    return BadRequest(new
                    {
                        Status = 400,
                        Message = ex.Message
                    });
                }

                return StatusCode(500, new
                {
                    Status = 500,
                    Message = ex.Message
                });
            }
        }

        [HttpPut]
        public IActionResult Update(Customer data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                CustomerData obj = new CustomerData();

                bool result = obj.UpdateCustomer(data);

                if (result)
                {
                    return Ok(new
                    {
                        Status = 200,
                        Message = "Customer Updated Successfully"
                    });
                }

                return NotFound(new
                {
                    Status = 404,
                    Message = "Customer Not Found"
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
                CustomerData obj = new CustomerData();

                bool result = obj.DeleteCustomer(id);

                if (result)
                {
                    return Ok(new
                    {
                        Status = 200,
                        Message = "Customer Deleted Successfully"
                    });
                }

                return NotFound(new
                {
                    Status = 404,
                    Message = "Customer Not Found"
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
                        Message = "This Customer is used in Sales table. Delete related Sales first."
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


