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
    public class BranchChartsController : ControllerBase
    {
        private readonly FurnituresDBContext _context;

        public BranchChartsController(FurnituresDBContext context)
        {
            _context = context;
        }

        private static readonly string[] Branchers = new[]
        {
            "Ampara","Anuradhapura","Awissawella","Badulla","Bandaragama","Bandarawela","Dambulla","Dehiwala","Galle","Gampaha","Homagama","Horana","Ja-Ela","Kandy","Katharagama","Kegalle","Kurunegala","Maharagama","Matara","Nugegoda","Nuwara-Eliya","Panadura","Puttalam","Ragama","Rathmalana","Rathnapura","Suriyaweva","Sevanagala","Waskaduwa","Weeravila","Wellavaya","Yakkala"
        };

        private static readonly int[] Design = new[]
        {
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        };

        private static readonly string[] custombranch = new[]
        {
            "",""
        };
        
        
       [HttpGet]
        public IEnumerable<BranchCharts> Get()
        {

          
            int i = 0;
            int j = 0;
            return Enumerable.Range(1, Branchers.Length).Select(index => new BranchCharts
            {
                BranchnName = Branchers[i++],
                DesignAmount = Design[j++]

            })
            .ToArray();
        }
    }


}
