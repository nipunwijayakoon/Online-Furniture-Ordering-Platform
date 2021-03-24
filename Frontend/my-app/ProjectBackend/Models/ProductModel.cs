﻿using System;
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


        public string Prize { get; set; }


        public string ImageName { get; set; }



        public string Description { get; set; }


        [NotMapped]
        public IFormFile ImageFile { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }
    }
}
