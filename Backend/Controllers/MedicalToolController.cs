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
            select * from MedicalTools order by ""ToolID""
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

        [HttpPost("updatemedicaltool")]
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
        [HttpPost("delete")]
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
        [HttpGet("getbymedicaltoolid")]
        public JsonResult GetByMedicalToolID(int medicalToolID)
        {
            string query = @"Select* from medicaltools where""ToolID""=@ToolID";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection=new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command=new NpgsqlCommand(query,connection))
                {
                    command.Parameters.AddWithValue("@ToolID", medicalToolID);
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();

                }

            }
            return new JsonResult(table);
            
        }
        [HttpGet("searchbymedicaltoolname")]
        public JsonResult GetByMedicalToolName(string medicalToolName)
        {
            string query = @"select * from medicaltools where ""ToolName""=@medicalToolName";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@medicalToolName",medicalToolName);
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();

                }

            }
            return new JsonResult(table);

        }
       

    }
  

}
