using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Medicine
    {
        public int MedicineID { get; set; }
        public int SupplierID { get; set; }
        public string MedicineName { get; set; }
        public string SideEffects { get; set; }
    }
}
