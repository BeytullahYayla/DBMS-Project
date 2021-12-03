using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Treatment
    {
        public int TreatmentID { get; set; }
        public int MedicineID { get; set; }
        public string TreatmentName { get; set; }
        public double TreatmentFee { get; set; }
    }
}
