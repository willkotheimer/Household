using System;
using System.Collections.Generic;
using System.Linq;
using HouseHoldApp.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace HouseHoldApp.DataAccess
{
    public class CategoryRepository
    {
        const string ConnectionString = "Server=localhost; Database=Household; Trusted_Connection=True";

        public List<Category> GetAllCategories()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * FROM Categories";
            var results = db.Query<Category>(sql).ToList();
            return results;
        }
    }
}
