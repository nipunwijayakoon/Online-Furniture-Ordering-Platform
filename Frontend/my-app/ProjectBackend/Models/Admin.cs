using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackEnd.Models
{
    public class Admin
    {
        [Key]
        public int AdminId { get; set; }

        [Required(ErrorMessage ="Please Enter First name")]
        public string AdminFistName { get; set; }

        public string AdminLastName { get; set; }

        [Required(ErrorMessage ="Please Enter password")]
        [DataType(DataType.Password)]
        public string AdminPW { get; set; }

        [Required]
        [Compare("AdminPW" , ErrorMessage ="Both Passwords are not match")]
        [DataType(DataType.Password)]
        public string RetypeAdminPW { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string AdEmail { get; set; }
    }
}
