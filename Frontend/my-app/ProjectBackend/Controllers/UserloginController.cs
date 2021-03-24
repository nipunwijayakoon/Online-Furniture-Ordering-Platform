using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProjectBackend.Services.JWTService;
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
        private IJWTService _jwtService;

        public UserloginController(IConfiguration config, IJWTService jwtservice, FurnituresDBContext data)
        {
            _config = config;
            _data = data;
            _jwtService = jwtservice;
        }

        // POST api/<UserloginController>
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(Login login)
        {
            try { 
           
                var CheckCustomeEmil = _data.Customers.FirstOrDefault(m => m.CustomerEmail.ToLower() == login.Email);
                var CheckCustomerPW = _data.Customers.FirstOrDefault(m=> m.CustomerPW.ToLower() == login.Password);


                var CheckSellerEmail = _data.Shoplist.FirstOrDefault(m => m.SellerEmail.ToLower() == login.Email);
                var CheckSellerPW = _data.Shoplist.FirstOrDefault(m => m.SellerPW.ToLower() == login.Password);


                if (((CheckCustomeEmil == null) || (CheckCustomerPW == null)) && ((CheckSellerEmail == null) || (CheckSellerPW == null)))
                {
                    return BadRequest();
                }
                else
                {
                var tokenString = _jwtService.GenerateJWTtoken(login);
                return Ok(new
                {
                    token = tokenString
                });
                }

            }


            catch(Exception ex)
            { throw ex; }

        }
    }
}
