using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Models
{
    public class PayModel
    {
        [Key]
        public int BillingID { get; set; }

        public string CardName { get; set; }
        public string CardNo { get; set; }

        public int ExpMonth { get; set; }
        public int ExpYear { get; set; }

        public string Cvv { get; set; }
        public string BillDate { get; set; }
        public string Email { get; set; }
        public int TotalPrice { get; set; }
    }
}
