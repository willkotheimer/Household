﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HouseHoldApp.Models
{
    public class Images
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Image { get; set; }

        [ForeignKey("Chore")]
        public int ChoreId { get; set; }
        public Chores Chore { get; set; }

        [Required]
        public int Active { get; set; }
    }
}
