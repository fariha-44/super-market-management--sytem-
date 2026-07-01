using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using supermarketAPI.MODEL;
using supermarketAPI.ProductData;

namespace supermarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login(Login login)
        {
            UserData obj = new UserData();

            var user = obj.Login(login);

            if (user == null)
            {
                return Unauthorized(new
                {
                    Status = 401,
                    Message = "Invalid Username or Password"
                });
            }

            return Ok(new
            {
                Status = 200,
                Message = "Login Successful",
                User = user
            });
        }
    }
}
