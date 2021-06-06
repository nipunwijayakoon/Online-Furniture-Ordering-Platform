using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace ProjectBackend.Models
{
    public class DeletedDesigns
    {

        [Key]
        public int DeletedID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Input_Design_Code { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Statusof_Design { get; set; }

        [Column(TypeName = "nvarchar(250)")]
        public string Deleted_Reason { get; set; }


    }
}
