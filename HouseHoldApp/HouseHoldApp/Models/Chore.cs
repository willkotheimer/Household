using System.ComponentModel.DataAnnotations;

namespace HouseHoldApp.Models
{
    public class Chores
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int HouseHoldId { get; set; }
        public int Category { get; set; }
    }
}