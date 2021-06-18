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
            c.Description as ChoreDescription, a.UserId, a.IsCompleted, a.Week, a.Rating,
             a.Id as assignmentId, c.Id as choreId, u.FirebaseKey, cat.CategoryName
            FROM [Users] u
            JOIN Assignments assign on assign.UserId = u.Id
            JOIN Chores c ON c.Id=assign.ChoreId
            JOIN dbo.[Categories] cat on cat.Id = c.Category
            JOIN Assignments a ON c.Id = a.ChoreId
            JOIN HouseholdUser hu on hu.UserId = u.Id 
            WHERE hu.HouseholdId=(SELECT hu.HouseholdId FROM [Users] u
            JOIN HouseholdUser hu on hu.UserId = u.Id
            WHERE u.id = @id)
            GROUP BY a.Id,u.Firstname,u.Lastname, u.FirebaseKey, c.Name,
            c.Description, a.IsCompleted, a.Week, a.Rating, c.Id, u.FirebaseKey, cat.CategoryName,a.UserId
            ORDER BY cat.CategoryName, c.Id";

            var results = db.Query<AssignmentsChoresUser>(sql, new { Id = id }).ToList();
            return results;
        }
    }
}
