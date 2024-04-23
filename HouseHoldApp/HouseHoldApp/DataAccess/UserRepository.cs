using System;
using System.Collections.Generic;
using System.Linq;
using HouseHoldApp.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace HouseHoldApp.DataAccess
{
    public class UserRepository
    {
        const string ConnectionString = "Server=localhost; Database=Household; Trusted_Connection=True";
        public List<Users> GetAllUsers()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * FROM Users";
            var results = db.Query<Users>(sql).OrderByDescending(u => u.Lastname).ToList();
            return results;
        }

        public Users GetUserById(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM dbo.[Users] WHERE Id = @id";
            var result = db.QueryFirstOrDefault<Users>(sql, new { Id = id });
            return result;
        }

        public Users GetUserByFirebaseKey(string firebaseKey)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM Users WHERE FirebaseKey = @firebaseKey";
            var result = db.QueryFirstOrDefault<Users>(sql, new { FirebaseKey = firebaseKey });
            return result;
        }

        public List<UserHousehold> GetUsersInUsersHouseHold(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"SELECT * FROM [Users] u
                        JOIN HouseHold_User hu on hu.UserId = u.Id 
                        WHERE hu.HouseholdId=(SELECT hu.HouseholdId FROM [Users] u
                        JOIN HouseholdUser hu on hu.UserId = u.Id
                        WHERE u.Id = @id)";
            var result = db.Query<UserHousehold>(sql, new { Id = id }).OrderByDescending(user => user.Lastname).ToList();
            return result;
        }
        public void AddAUser(Users user)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"INSERT INTO Users(Firstname,Lastname,Email,FirebaseKey) 
                        OUTPUT inserted.id
                        VALUES(@Firstname,@Lastname,@Email,@FirebaseKey);";
            var id = db.ExecuteScalar<int>(sql, user);
            user.Id = id;
        }

        public void UpdateUser(Users user)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = $@"UPDATE Users SET
                         Firstname=@Firstname,
                         Lastname=@Lastname,
                         Email=@Email
                         WHERE Id=@Id";
            db.Execute(sql, user);
        }

    }
}
