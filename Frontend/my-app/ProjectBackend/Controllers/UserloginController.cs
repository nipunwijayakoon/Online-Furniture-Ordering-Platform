using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProjectBackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserloginController : ControllerBase
    {
        public readonly FurnituresDBContext _data;
        private readonly IConfiguration _config;

        public UserloginController(IConfiguration config, FurnituresDBContext data)
        {
            _config = config;
            _data = data;
        }

        // POST api/<UserloginController>
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(Login login)
        {
            var CheckCustomeEmil = _data.Customers.FirstOrDefault(m => m.CustomerEmail.ToLower() == login.Email);
            var CheckCustomerPW = _data.Customers.FirstOrDefault(m => m.CustomerPW.ToLower() == login.Password);

            if ((CheckCustomeEmil == null) || (CheckCustomerPW == null))
            {
                return BadRequest();
            }

            else
            {
                return Ok();
            }

        }

    }
}
