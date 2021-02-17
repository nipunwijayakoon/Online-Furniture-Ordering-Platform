using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackEnd.Models
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }
        public string Name { get; set; }
        public string ContactNo { get; set; }
        public string City { get; set; }
        public string Date { get; set; }
        
    }
}
