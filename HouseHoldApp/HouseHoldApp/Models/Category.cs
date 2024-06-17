using System.ComponentModel.DataAnnotations;

namespace HouseHoldApp.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string CategoryName { get; set; }
    }
}
