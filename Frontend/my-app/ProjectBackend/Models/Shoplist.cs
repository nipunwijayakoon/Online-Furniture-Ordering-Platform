using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ProjectBackend.Models
{
    public class Shoplist


    {


        [Key]
        public int ShopId { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string SellerEmail { get; set; }

        [Required(ErrorMessage = "Please Enter Name")]
        public string SellerFirstName { get; set; }

        public string SellerLastName { get; set; }

        public string Area { get; set; }

        public string Name { get; set; }

        public string Owner { get; set; }

        [Required(ErrorMessage = "Please Enter Contact Number")]
        public string TelNumber { get; set;}


        [Required(ErrorMessage = "Please Enter Password")]
        [DataType(DataType.Password)]
        public string SellerPW { get; set; }

        [Required]
        [Compare("SellerPW", ErrorMessage = "Both Password are not match")]
        [DataType(DataType.Password)]
        public string RetypeSellerPW { get; set; }

        
    

}
}
