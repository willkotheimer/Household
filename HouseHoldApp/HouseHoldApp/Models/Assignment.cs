using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HouseHoldApp.Models
{
    public class Assignments
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int Week { get; set; }
        public bool isCompleted { get; set; }
        public int Rating { get; set; }
        public int ChoreId { get; set; }
    }
}
