using HouseHoldApp.Models;
using Microsoft.Data.SqlClient;
using Dapper;
using System.Collections.Generic;
using System.Linq;

namespace HouseHoldApp.DataAccess
{
    public class AssignmentsChoresUserRepository
    {
        const string ConnectionString = "Server=localhost; Database=Household; Trusted_Connection=True";

        public List<AssignmentsChoresUser> GetAssignmentChoresUserByFirebaseKey(string id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"SELECT u.Firstname,u.Lastname, u.FirebaseKey, c.Name as Chorename,
                        c.Description as ChoreDescription, a.IsCompleted, a.Week, a.Rating,
                        a.Id as assignmentId, c.Id as choreId, u.FirebaseKey as userId,
                        h.Id as householdId, cat.CategoryName
                        FROM [Users] u
                        JOIN HouseholdUser hu on hu.UserId = u.Id 
                        JOIN Household h ON hu.HouseholdId=h.Id
                        JOIN Chores c ON c.HouseHoldId=h.Id
                        JOIN Categories cat on cat.Id = c.Category
                        JOIN Assignments a ON c.Id = a.ChoreId
                        WHERE hu.HouseholdId=(SELECT hu.HouseholdId FROM [Users] u
                        JOIN HouseholdUser hu on hu.UserId = u.Id
                        WHERE u.FirebaseKey = @id)
                        ORDER BY cat.CategoryName ASC";

            var results = db.Query<AssignmentsChoresUser>(sql, new { Id = id }).ToList();
            return results;
        }
    }
}
