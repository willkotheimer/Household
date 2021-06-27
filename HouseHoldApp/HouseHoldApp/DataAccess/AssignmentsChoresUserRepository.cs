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

        public List<AssignmentsChoresUser> GetAssignmentChoresUserById(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@" SELECT u.Firstname,u.Lastname, u.FirebaseKey, c.Name as Chorename,
            c.Description as ChoreDescription, assign.UserId, assign.IsCompleted, assign.Week, assign.Rating,
            assign.Id as assignmentId, c.Id as choreId, u.FirebaseKey, cat.CategoryName
            FROM[Users] u
            JOIN Assignments assign on assign.UserId = u.Id
            JOIN Chores c ON c.Id = assign.ChoreId
            JOIN dbo.[Categories] cat on cat.Id = c.Category
            JOIN HouseholdUser hu on hu.UserId = u.Id
            WHERE hu.HouseholdId = (SELECT hu.HouseholdId FROM[Users] u
             JOIN HouseholdUser hu on hu.UserId = u.Id
            WHERE u.id = @id)
            GROUP BY c.Description, assign.Id,u.Firstname,u.Lastname, u.FirebaseKey, c.Name,
             assign.IsCompleted, assign.Week, assign.Rating, c.Id, u.FirebaseKey, cat.CategoryName,assign.UserId
            ORDER BY cat.CategoryName, c.Id";
            
            var results = db.Query<AssignmentsChoresUser>(sql, new { Id = id }).ToList();
            return results;
        }
    }
}
