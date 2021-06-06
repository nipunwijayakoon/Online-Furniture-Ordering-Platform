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

        public int Designcode { get; set; }
        public string ProductName { get; set; }
        public string Branch { get; set; }

        public string ImageSrc { get; set; }
        public string ImageName { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public int Price { get; set; }

        public int Count { get; set; }
        public int Total { get; set; }
     
    }
}
