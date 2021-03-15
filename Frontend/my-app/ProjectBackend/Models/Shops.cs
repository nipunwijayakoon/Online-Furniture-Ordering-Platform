using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Models
{
    public class Shops
    {
        [Key]
        public int ShopID { get; set; }
        public string ShopName { get; set; }
        public string ShopEmail { get; set; }
        public string ShopOwnerName { get; set; }
        public string ShopTelNumber { get; set; }
    }
}
