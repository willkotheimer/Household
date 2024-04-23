using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HouseHoldApp.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string FirebaseKey { get; set; }
    }
}
