using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Models
{
    public class Receipt
    {
        [Key]
        public int OrderId { get; set; }

        public string ProductName { get; set; }
        
        public float Price { get; set; }

        public string Email { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerName { get; set; }
        public string Date { get; set; }
    }
}
