using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HouseHoldApp.Models
{
    public class Household
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        public ICollection<HoldholdUser> HoldholdUsers { get; set; }
        public ICollection<Chores> Chores { get; set; }
    }
}
