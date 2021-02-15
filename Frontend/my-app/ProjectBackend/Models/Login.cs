using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackEnd.Models
{
    public class Login
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Cannot leave this field empty")]
        public string Password { get; set; }
    }
}
