using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackEnd.Models
{
    public class BillingNewDesign
    {
        [Key]
        public int BillingNewId { get; set; }


        public string CardName { get; set; }
        public string CardNo { get; set; }
        public int ExpMonth { get; set; }
        public int ExpYear { get; set; }
        public string Cvv { get; set; }
        public string BillDate { get; set; }
        public string Email { get; set; }
        public int TotalPrice { get; set; }

        public string Tele { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Designcode { get; set; }
        public string Distance { get; set; }

        public string Newdesigncode { get; set; }
        public string PayInfo { get; set; }

    }
}