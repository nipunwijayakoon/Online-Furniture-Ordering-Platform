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

        // POST api/<LogSignUpController>
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(Login login)
    }
}
