using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ServerApp.Data;
using ServerApp.DTO;
using ServerApp.Models;

namespace ServerApp.Controllers
{
    //localhost:5254/api/Teacher
    [ApiController]
    [Route("api/[controller]")]
    public class TeacherController : ControllerBase
    {
        private readonly IRepository<Teacher> _repository;
        public TeacherController(IRepository<Teacher> repository)
        {
            _repository = repository;
            
        }
       //localhost:5254/api/teacher
        [HttpGet]
        public IEnumerable<Teacher> GetTeachers()
        {
            return _repository.TGetList();
        }
       //localhost:5254/api/teacher/2
        [HttpGet("{id}")]
        public Teacher GetTeacher(int id)
        {
            return _repository.TGetByID(id);
        }
        [HttpPost]
        public void Post([FromBody] Teacher teacher)
        {
            _repository.TAdd(teacher);
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Teacher teacher)
        {
            teacher.TeacherID = id;
            _repository.TUpdate(teacher);
        }
         //localhost:5254/api/teacher/2
        [HttpDelete("{id}")]
        public void Delete(Teacher teacher)
        {
           _repository.TDelete(teacher);
        }
    }
}
