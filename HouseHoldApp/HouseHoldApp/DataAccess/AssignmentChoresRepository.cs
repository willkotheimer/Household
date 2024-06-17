﻿using HouseHoldApp.Models.HouseHoldApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HouseHoldApp.DataAccess
{
    public class AssignmentsChoresRepository
    {
        private readonly HouseholdContext _context;

        public AssignmentsChoresRepository(HouseholdContext context)
        {
            _context = context;
        }

        public async Task<List<AssignmentsChores>> GetAssignmentChoresByHouseholdIdAsync(int id)
        {
            var results = await _context.Assignments
                .Include(a => a.Chore)
                .Where(a => a.Chore.HouseHoldId == id)
                .Select(a => new AssignmentsChores(a))
                .ToListAsync();

            return results;
        }
    }
}