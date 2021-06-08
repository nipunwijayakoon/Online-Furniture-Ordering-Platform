using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectBackend.Models;
using ProjectBackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DesignChartController : ControllerBase
    {
        private readonly FurnituresDBContext _context;
        public DesignChartController(FurnituresDBContext context)
        {
            _context = context;
        }

        private static readonly string[] Tables = new[]
        {
            "Products", "Seller"
        };

        private static readonly int[] Getamount = new[]
        {
            20,20
        };

        [HttpGet]
        public IEnumerable<Charts> Get()
        {

            Getamount[0] = _context.Products.Count();
            Getamount[1] = _context.Shoplist.Count();

            int i = 0;
            int j = 0;
            return Enumerable.Range(1, Tables.Length).Select(index => new Charts
            {
                Tablename = Tables[i++],
                Amount = Getamount[j++]

            })
            .ToArray();


        }
    }
}
