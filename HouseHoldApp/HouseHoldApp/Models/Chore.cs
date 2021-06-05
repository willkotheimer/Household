using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HouseHoldApp.Models
{
    public class Chores
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int HouseHoldId { get; set; }

    }

}
