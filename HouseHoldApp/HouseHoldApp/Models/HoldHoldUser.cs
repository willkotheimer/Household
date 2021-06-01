using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HouseHoldApp.Models
{
    public class HoldholdUser
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int HouseholdId { get; set; }
        public bool IsConfirmed { get; set; }

    }
}
