using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class PetOwner
    {
        public int PetOwnerID { get; set; }
        public string PetOwnerIdentityNo { get; set; }
        public string PetOwnerName { get; set; }
        public string PetOwnerSurname { get; set; }
        public string PetOwnerTelNo { get; set; }
        public string PetOwnerAdress { get; set; }
    }
}
