using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Models
{
    public class Cartitems
    {
        [Key]
        public int ProductID { get; set; }
        public string Title { get; set; }
        public string Src { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string Price { get; set; }
        public string Colour { get; set; }
        public string Count { get; set; }
        public string Total { get; set; }
    }
}
