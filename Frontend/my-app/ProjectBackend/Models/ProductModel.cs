using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace ProjectBackend.Models
{
    public class ProductModel
    {
        [Key]
        public int ProductID { get; set; }


        public string ProductName { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }


        public int Price { get; set; }
        public string Count { get; set; }


        public string ImageName { get; set; }



        


        [NotMapped]
        public IFormFile ImageFile { get; set; }

       
        
    }
}
