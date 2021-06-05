using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HouseHoldApp.Models
{
    public class AssignmentsChores
    {
        public int UserId { get; set; }
        public int Week { get; set; }
        public bool isCompleted { get; set; }
        public int Rating { get; set; }
        public int ChoreId { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int HouseHoldId { get; set; }
        public Category Category { get; set; }
    }
}
