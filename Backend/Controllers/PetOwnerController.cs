using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Constants;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetOwnerController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PetOwnerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet("getpetowners")]
        public JsonResult Get()
        {
            string query = @"select * from petowners";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost("addpetowner")]
        public JsonResult Add(PetOwner petOwner)
        {

            string query = @"insert into (""PetOwnerIdentityNo"",""PetOwnerName"",""PetOwnerSurname"",""PetOwnerTelNo"",""PetOwnerAdress"") Values(@PetOwnerName,@PetOwnerSurname,@PetOwnerTelNo,@PetOwnerAdress)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@PetOwnerName", petOwner.PetOwnerName);
                    command.Parameters.AddWithValue("@PetOwnerIdentityNo", petOwner.PetOwnerIdentityNo);
                    command.Parameters.AddWithValue("@PetOwnerSurname", petOwner.PetOwnerSurname);
                    command.Parameters.AddWithValue("@PetOwnerTelNo", petOwner.PetOwnerTelNo);
                    command.Parameters.AddWithValue("@PetOwnerName", petOwner.PetOwnerAdress);
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();
                }
            }
            return new JsonResult("Added Successfully");


        }
        [HttpPost("DeletePetOwner")]
        public JsonResult Delete(int petOwnerID)
        {
            string query = @"Delete from petowners
            where ""PetOwnerID""=@PetOwnerID

";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@PetOwnerID", petOwnerID);

                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();
                }
            }
            return new JsonResult(Messages.SuccessfullyDeleted);
        }
        [HttpPost("UpdatePetOwner")]
        public JsonResult Update(PetOwner petOwner)
        {
            string query = @"UPDATE petowners
            SET ""PetOwnerID""=@PetOwnerID,""PetOwnerIdentityNo""=@PetOwnerIdentityNo,""PetOwnerName""=@PetOwnerName,""PetOwnerSurname""=@PetOwnerSurname,""PetOwnerTelNo""=@PetOwnerTelNo,""PetOwnerAdress"",@PetOwnerAdress
            Where ""PetOwnerID""=@PetOwnerID

";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@PetOwnerID", petOwner.PetOwnerID);
                    command.Parameters.AddWithValue("@PetOwnerIdentityNo", petOwner.PetOwnerIdentityNo);
                    command.Parameters.AddWithValue("@PetOwnerName", petOwner.PetOwnerName);
                    command.Parameters.AddWithValue("@PetOwnerSurname", petOwner.PetOwnerSurname);
                    command.Parameters.AddWithValue("@PetOwnerTelNo", petOwner.PetOwnerTelNo);
                    command.Parameters.AddWithValue("@PetOwnerAdress", petOwner.PetOwnerAdress);
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();
                }
            }
            return new JsonResult(Messages.SuccessfullyUpdated);

        }



    }
}
