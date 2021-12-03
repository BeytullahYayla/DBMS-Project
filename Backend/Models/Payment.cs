using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Payment
    {
        public int PaymentID { get; set; }
        public int PetOwnerID { get; set; }
        public double Amount { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}
