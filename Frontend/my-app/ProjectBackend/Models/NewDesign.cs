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

        public string NewDesignCode { get; set; }
        public string WoodName { get; set; }
        public string WoodColour { get; set; }
        public string BranchName { get; set; }

        public string Location { get; set; }

        public string PersonName { get; set; }
        public string PersonAddress { get; set; }
        public string PersonEmail { get; set; }
        public string TimeDuration { get; set; }
        public string ContactDetails { get; set; }
    }
}
