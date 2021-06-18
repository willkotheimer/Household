using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HouseHoldApp.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace HouseHoldApp.DataAccess
{
    public class AssignmentsRepository
    {
        const string ConnectionString = "Server=localhost; Database=Household; Trusted_Connection=True";

        public List<Assignments> GetAllAssignments()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * FROM Assignments";
            var results = db.Query<Assignments>(sql).OrderByDescending(assignment => assignment.Week).ToList();
            return results;
        }

        public List<Assignments> GetAllAssignmentsOfWeek(int week)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT* FROM Assignments WHERE week = @week";
            var results = db.Query<Assignments>(sql, new { week = week }).OrderByDescending(assignment => assignment.Week).ToList();
            return results;
        }

        public List<Assignments> GetAllAssignmentsOfUser(int userId)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * FROM Assignments WHERE UserId = @userId";
            var results = db.Query<Assignments>(sql, new { UserId = userId }).OrderByDescending(assignment => assignment.Week).ToList();
            return results;
        }

        public Assignments GetAssignmentById(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM Assignments WHERE Id = @id";
            var result = db.QueryFirstOrDefault<Assignments>(sql, new { Id = id });
            return result;
        }

        public void AddAnAssignment(Assignments assignment)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"INSERT INTO Assignments(UserId,Week,ChoreId) 
                        OUTPUT inserted.id
                        VALUES(@UserId,@Week,@ChoreId);";
            var id = db.ExecuteScalar<int>(sql, assignment);
            assignment.Id = id;
        }

        public void SetAssignmentDone(Assignments assignment)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"UPDATE Assignments SET
                         UserId=@UserId,
                         Week=@Week,
                         IsCompleted=1,
                         Rating = @Rating,
                         ChoreId = @ChoreId
                         WHERE Id= @id";
            db.Execute(sql, assignment);
        }

        public void UpdateAssignment(Assignments assignment)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"UPDATE Assignments SET
                         UserId=@UserId,
                         Week=@Week,
                         IsCompleted=@IsCompleted,
                         Rating = @Rating,
                         ChoreId = @ChoreId
                         WHERE Id= @id";
            db.Execute(sql, assignment);
        }
    }
}
