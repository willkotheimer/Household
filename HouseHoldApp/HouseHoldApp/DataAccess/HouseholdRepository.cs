using System.Collections.Generic;
using System.Linq;
using HouseHoldApp.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace HouseholdApp.DataAccess
{
    public class HouseholdRepository
    {
        const string ConnectionString = "Server=localhost; Database=Household; Trusted_Connection=True";

        public List<Household> GetAllHouseholds()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * FROM Household";
            var results = db.Query<Household>(sql).OrderByDescending(hh => hh.Name).ToList();
            return results;
        }

        public Household GetHouseholdById(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM Household WHERE Id = @id";
            var result = db.QueryFirstOrDefault<Household>(sql, new { Id = id });
            return result;
        }

        public void AddAHousehold(Household household)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"INSERT INTO Household(Name) 
                        OUTPUT inserted.id
                        VALUES(@Name);";
            var id = db.ExecuteScalar<int>(sql, household);
            household.Id = id;
        }

        public void UpdateHousehold(Household household)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"UPDATE Household SET
                         Name=@Name
                         WHERE Id=@Id";
            db.Execute(sql, household);
        }
    }
}
