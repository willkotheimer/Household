using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HouseHoldApp.Models
{
    public class Chore
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int HouseHoldId { get; set; }
        public Category Category { get; set; }

    }

    public enum Category
    {
        Kitchen,
        Bathroom,
        Closet,
        Livingroom,
        Playroom,
        Office,
        Study,
        Diningroom,
        Cabinets,
        Shed,
        Garage,
        Bedroom
    }
}
