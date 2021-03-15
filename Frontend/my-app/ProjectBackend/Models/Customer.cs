using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackEnd.Models
{
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string CustomerEmail { get; set; }

        [Required(ErrorMessage = "Please Enter Name")]
        public string CustomerFirstName { get; set; }

        public string CustomerLastName { get; set; }

        public string CustomerTown { get; set; }

        [Required(ErrorMessage = "Please Enter Contact Number")]
        public string CustomerTellnumber { get; set; }

        [Required(ErrorMessage = "Please Enter Password")]
        [DataType(DataType.Password)]
        public string CustomerPW { get; set; }

        [Required]
        [Compare("CustomerPW", ErrorMessage ="Both Password are not match")]
        [DataType(DataType.Password)]
        public string RetypeCustomerPW { get; set; }

        public string UserRole = "Customer";
        internal int CustomerId;
    }
}

