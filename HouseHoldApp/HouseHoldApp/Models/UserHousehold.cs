using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HouseHoldApp.Models
{
    public class UserHousehold
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string firebaseKey { get; set; }
        public int HouseholdId { get; set; }
    }
}
