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
    public class MedicalToolController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public MedicalToolController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet("getall")]
        public JsonResult Get()
        {
            string query = @"
            select * from MedicalTools
";
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
        [HttpPost("addmedicaltool")]
        public JsonResult Post(MedicalTool medicalTool)
        {
            


            string query = @"INSERT INTO medicaltools (""ToolName"") values(@ToolName)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                   
                    command.Parameters.AddWithValue("@ToolName", medicalTool.ToolName);
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();
                }
            }
            return new JsonResult(Messages.SuccessfullyAdded);

        }

        [HttpPut("updatemedicaltool")]
        public JsonResult Update(MedicalTool medicalTool)
        {
            string query = @"UPDATE medicaltools
            SET ""ToolName""=@ToolName
            Where ""ToolID""=@ToolID

";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@ToolID", medicalTool.ToolID);
                    command.Parameters.AddWithValue("@ToolName", medicalTool.ToolName);
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();
                }
            }
            return new JsonResult(Messages.SuccessfullyUpdated);

        }
        [HttpDelete("{medicalToolID}")]
        public JsonResult Delete(int medicalToolID)
        {
            string query = @"Delete from medicaltools
            where ""ToolID""=@ToolID

";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@ToolID", medicalToolID);
                    
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();
                }
            }
            return new JsonResult(Messages.SuccessfullyDeleted);
        }

    }
  

}
