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
    public class PatientController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PatientController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet("getpatientdetails")]
        public JsonResult Get()
        {
            string query = @"select * from getpatientdetails()";
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
        [HttpGet("getbypatientid")]
        public JsonResult GetByPatientID(int patientID)
        {
            string query = @"select * from getpatientbypatientid(@PatientID)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@PatientID", patientID);
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();

                }

            }
            return new JsonResult(table);

        }
        [HttpPost]
        public JsonResult Post(Patient patient)
        {



            string query = @"INSERT INTO patients (""PatientCategoryID"",""VeterinerianID"",""PetOwnerID"",""DiagnosisID"",""PatientRoomID"",""PatientName"",""PatientAge"") values(@PatientCategoryID,@VeterinerianID,@PetOwnerID,@DiagnosisID,@PatientRoomID,@PatientName,@PatientAge)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {

                    command.Parameters.AddWithValue("@PatientCategoryID", patient.PatientCategoryID);
                    command.Parameters.AddWithValue("@VeterinerianID", patient.VeterinerianID);
                    command.Parameters.AddWithValue("@PetOwnerID", patient.PetOwnerID);
                    command.Parameters.AddWithValue("@DiagnosisID", patient.DiagnosisID);
                    command.Parameters.AddWithValue("@PatientRoomID", patient.PatientRoomID);
                    command.Parameters.AddWithValue("@PatientName", patient.PatientName);
                    command.Parameters.AddWithValue("@PatientAge", patient.PatientAge);
                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();
                }
            }
            return new JsonResult(Messages.SuccessfullyAdded);

        }

        [HttpDelete("delete")]
        public JsonResult Delete(int patientID)
        {
            string query = @"Delete from patients
            where ""PatientID""=@PatientID

";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@PatientID", patientID);

                    myReader = command.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    connection.Close();
                }
            }
            return new JsonResult(Messages.SuccessfullyDeleted);
        }
       
        [HttpPost("updatepatient")]
        public JsonResult Update(Patient patient)
        {
            string query = @"UPDATE patients
            SET ""VeterinerianID""=@VeterinerianID,""DiagnosisID""=@DiagnosisID,""PatientRoomID""=@PatientRoomID,""PatientName""=@PatientName,""PatientAge""=@PatientAge
            Where ""PatientID""=@PatientID

";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VetAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection connection = new NpgsqlConnection(sqlDataSource))
            {
                connection.Open();
                using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@VeterinerianID", patient.VeterinerianID);
                    command.Parameters.AddWithValue("@DiagnosisID", patient.DiagnosisID);
                    command.Parameters.AddWithValue("@PatientRoomID", patient.PatientRoomID);
                    command.Parameters.AddWithValue("@PatientName", patient.PatientName);
                    command.Parameters.AddWithValue("@PatientAge", patient.PatientAge);
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
