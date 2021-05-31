using System;
using System.Collections.Generic;
using System.Linq;
using HouseHoldApp.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace HouseHoldApp.DataAccess
{
        public class ImagesRepository
        {
            const string ConnectionString = "Server=localhost; Database=Household; Trusted_Connection=True";

            public List<Images> GetAllImages()
            {
                using var db = new SqlConnection(ConnectionString);
                var sql = @"SELECT * FROM Images";
                var results = db.Query<Images>(sql).ToList();
                return results;
            }

            public List<Images> GetImageByChoreId(int Choreid)
            {
                using var db = new SqlConnection(ConnectionString);
                var sql = "SELECT * FROM Images WHERE ChoreId = @Choreid";
                var result = db.Query<Images>(sql, new { Choreid = Choreid }).ToList();
                return result;
            }

            public void AddAnImage(Images image)
            {
                using var db = new SqlConnection(ConnectionString);
                var sql = $@"INSERT INTO Images(Image,ChoreId,Active) 
                        OUTPUT inserted.id
                        VALUES(@Image,@ChoreId,1);";
                var id = db.ExecuteScalar<int>(sql, image);
                image.Id = id;
            }
  
            public void InactivateImage(int id)
            {
                using var db = new SqlConnection(ConnectionString);
                var sql = $@"UPDATE Images SET
                         Active=0
                         WHERE Id=@id";
                db.Execute(sql, new { Id = id });
            }
        }
    }

