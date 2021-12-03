using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Veterinerian
    {
        public int VeterinerianID { get; set; }
        public int PatientID { get; set; }
        public int VeterinerianSpecializityID { get; set; }
        public string VeterinerianName { get; set; }
        public int VeterinerianAge { get; set; }
    }
}
