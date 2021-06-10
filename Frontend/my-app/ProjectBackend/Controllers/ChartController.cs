using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjectBackEnd.Models;
using ProjectBackend.Models;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartController : ControllerBase
    {
        private readonly FurnituresDBContext _context;
        public ChartController (FurnituresDBContext context)
        {
            _context = context;
        }

        private static readonly string[] Tables = new[]
        {
            "Customer", "NewDesign","Seller","Products"
        };

        private static readonly int[] Getamount = new[]
        {
            20,20,20,20
        };

        [HttpGet]
        public IEnumerable<Charts> Get()
        {

            Getamount[0] = _context.Customers.Count();
            Getamount[1] = _context.NewDesign_1.Count();
            Getamount[2] = _context.Shop.Count();
            Getamount[3] = _context.Products.Count();



            int i = 0;
            int j = 0;
                return Enumerable.Range(1, Tables.Length).Select(index => new Charts
                {
                    Tablename = Tables[i ++],
                    Amount = Getamount[j ++ ]

                })
                .ToArray();
            
            
        }
    }
}
