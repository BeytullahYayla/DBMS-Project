using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Patient
    {
        public int PatientID { get; set; }
        public int PatientCategoryID { get; set; }
        public int ExaminationID { get; set; }
        public int VeterinerianID { get; set; }
        public int PetOwnerID { get; set; }
        public int DiagnosisID { get; set; }
        public int PatientRoomID { get; set; }
        public string PatientName { get; set; }
        public int PatientAge { get; set; }
    }
}
