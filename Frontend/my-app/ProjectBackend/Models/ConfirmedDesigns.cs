using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace ProjectBackend.Models
{
    public class ConfirmedDesigns
    {

        [Key]
        public int ConfirmedID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Input_Design_Code { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Statusof_Order { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public int Estimated_Amount { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public int No_of_kms { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public int Charge_for_km { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public int Percentage_of_advance { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Seller_Contact { get; set; }
    }
}
