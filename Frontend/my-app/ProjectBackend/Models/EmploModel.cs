using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Models
{
    public class EmploModel
    {
        [Key]
        public int EmploID { get; set; }

       // [Column(TypeName = "nvarchar(50)")]
       // public string EmploName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string NewDesignCode { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ImageName_ { get; set; }

        [NotMapped]
        public IFormFile ImageFile_ { get; set; }

        [NotMapped]
        public string ImageSrc_ { get; set; }

        //Pascal(EmploName) -> Camel EmploID ->emploID
        //Camel(emploName) -> Pascal
    }
}
