using System.Collections.Generic;
using System.Linq;
using HouseHoldApp.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace HouseHoldApp.DataAccess
{
    public class HouseHoldUserRepository
    {
        const string ConnectionString = "Server=localhost; Database=HouseHold; Trusted_Connection=True";

        public HoldholdUser GetHouseHoldUserById(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM HouseholdUser WHERE Id = @id";
            var result = db.QueryFirstOrDefault<HoldholdUser>(sql, new { Id = id });
            return result;
        }

        public HoldholdUser GetHouseHoldUserByUserId(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM HouseholdUser WHERE UserId = @id";
            var result = db.QueryFirstOrDefault<HoldholdUser>(sql, new { Id = id });
            return result;
        }

        public List<UserHousehold> GetUsersInUsersHouseHold(string id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"SELECT * FROM [Users] u
                        JOIN HouseholdUser hu on hu.UserId = u.Id 
                        WHERE hu.HouseholdId=(SELECT hu.HouseholdId FROM [Users] u
                        JOIN HouseholdUser hu on hu.UserId = u.Id
                        WHERE u.FirebaseKey = @id)";
            var result = db.Query<UserHousehold>(sql, new { Id = id }).OrderByDescending(user => user.Lastname).ToList();
            return result;
        }

        public void AddAHouseHoldUser(HoldholdUser HouseHoldUser)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"INSERT INTO HouseholdUser(UserId,HouseholdId,IsConfirmed) 
                        OUTPUT inserted.id
                        VALUES(@UserId,@HouseholdId,@IsConfirmed);";
            var id = db.ExecuteScalar<int>(sql, HouseHoldUser);
            HouseHoldUser.Id = id;
        }

        public void ConfirmHouseHoldUser(HoldholdUser HouseHoldUser)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"UPDATE HouseholdUser SET
                         IsConfirmed=1
                         WHERE Id=@Id";
            db.Execute(sql, HouseHoldUser);
        }

        public void DeleteHouseHoldUser(HoldholdUser HouseHoldUser)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"DELETE FROM HouseholdUser 
                         WHERE UserId=@Id";
            db.Execute(sql, HouseHoldUser);
        }

    }
}
