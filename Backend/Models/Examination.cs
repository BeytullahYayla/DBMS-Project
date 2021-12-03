using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Examination
    {
        public int ExaminationID { get; set; }
        public int TreatmentID { get; set; }
        public int PatientID { get; set; }
        public int MedicineID { get; set; }
        public DateTime ExaminationDate { get; set; }
        public string Complains { get; set; }
    }
}
