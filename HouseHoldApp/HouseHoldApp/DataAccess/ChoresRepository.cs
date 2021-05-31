using System;
using System.Collections.Generic;
using System.Linq;
using HouseHoldApp.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace HouseHoldApp.DataAccess
{
    public class ChoresRepository
    {
        const string ConnectionString = "Server=localhost; Database=Household; Trusted_Connection=True";

        public List<Chores> GetAllChores()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * FROM Chores";
            var results = db.Query<Chores>(sql).OrderByDescending(chore => chore.Name).ToList();
            return results;
        }

        public Chores GetChoreById(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM Chores WHERE Id = @id";
            var result = db.QueryFirstOrDefault<Chores>(sql, new { Id = id });
            return result;
        }

        public void AddAChore(Chores chore)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"INSERT INTO Chores(Name,Category,Description) 
                        OUTPUT inserted.id
                        VALUES(@Name,@Category,@Description);";
            var id = db.ExecuteScalar<int>(sql, chore);
            chore.Id = id;
        }

        public void Updatechore(Chores chore)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"UPDATE Chores SET
                         Name=@Name,
                         Category=@Category,
                         Description=@Description
                         WHERE Id=@Id";
            db.Execute(sql, chore);
        }
    }
}
