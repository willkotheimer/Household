using HouseHoldApp.Models;
using Microsoft.Data.SqlClient;
using Dapper;
using System.Collections.Generic;
using System.Linq;

namespace HouseHoldApp.DataAccess
{
    public class AssignmentsChoresRepository
    {
        const string ConnectionString = "Server=localhost; Database=Household; Trusted_Connection=True";

        public List<AssignmentsChores> GetAssignmentChoresByHouseholdId(int id)
        {
            using var db = new SqlConnection(ConnectionString);
           
            var sql = $@"SELECT * FROM Assignments a
                         JOIN Chores c ON c.Id = a.ChoreId
                         WHERE c.HouseHoldId = @id";
            var results = db.Query<AssignmentsChores>(sql, new { Id = id }).ToList();
            return results;
        }
    }
}
