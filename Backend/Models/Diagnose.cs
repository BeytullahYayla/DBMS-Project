using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Diagnose
    {
        public int DiagnosisID { get; set; }
        public int TreatmentID { get; set; }
        public int RiskSituationID { get; set; }
        public string DiagnosisName { get; set; }
    }
}
