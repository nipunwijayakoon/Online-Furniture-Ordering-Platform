using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Models
{
    public class NewDesign
    {
        [Key]
        public int ItemID { get; set; }

        public string WoodName { get; set; }
        public string WoodColour { get; set; }
        public string BranchName { get; set; }
        public string Distance { get; set; }
        public string DurationDate { get; set; }
        public string ContactDetails { get; set; }
    }
}
