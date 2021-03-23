using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackEnd.Models
{
    public class Item
    {
        [Key]
        public int ItemID { get; set; }

        public string Title { get; set; }
        public string Src { get; set; }

        public string Description { get; set; }

        public string Content { get; set; }
        public string Price { get; set; }
        public string Colors { get; set; }
        public int Count { get; set; }
        
    }
}
