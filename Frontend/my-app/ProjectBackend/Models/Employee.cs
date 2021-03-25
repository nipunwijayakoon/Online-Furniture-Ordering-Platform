using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackEnd.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }

        public string EmployeeEmail { get; set; }

        public string EmployeeFirstName { get; set; }

        public string EmployeeLastName { get; set; }
        public string EmployeeTown { get; set; }
        public string EmployeeTellnumber { get; set; }
        public string EmployeeAge { get; set; }
        public string EmployeeRole { get; set; }
        public string WorkExp { get; set; }
        public string Status { get; set; }
             

        
    }
}
