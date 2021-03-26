using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.ComponentModel.DataAnnotations;
using ProjectBackEnd;
using ProjectBackend.Models;

namespace ProjectBackEnd.Models
{
    public class PaymentModel
    {
        [Key]
        public string Id { get; set; }
        public string Cardnumber { get; set; }
        public string Fullname { get; set; }
        public string Addressline1 { get; set; }
        public string Addressline2 { get; set; }
        public string City { get; set; }
        public string Province { get; set; }

        public string Email { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public string Cvc { get; set; }
        public int Amount { get; set; }
    }
}
