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
      private readonly LessonContext _context;
      public TeacherController(LessonContext context)
      {
         _context=context;
      }

       //localhost:5254/api/teacher
       [HttpGet]
       public async Task<ActionResult> GetTeachers()
       {
          var teacher=await _context.Teachers.Select(p=> new TeacherDTO(){
            TeacherID=p.TeacherID,
            Name=p.Name,
            Surname=p.Surname
          }).ToListAsync();
          return Ok(teacher);
       }
       //localhost:5254/api/teacher/2
       [HttpGet("{id}")]
       public async Task<ActionResult> GetTeacher(int id)
       {
           var p=await _context.Teachers.FirstOrDefaultAsync(i=>i.TeacherID == id);
           if(p==null) 
           {
            return NotFound();
           }  
           return Ok(p);
       }
        [HttpPost]
        public async Task<IActionResult> CreateTeacher(Teacher entity)
        {
            _context.Teachers.Add(entity);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTeacher),new {id=entity.TeacherID},entity);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTeacher(int id,Teacher entity)
        {
            if(id!=entity.TeacherID)
            {
                return BadRequest();
            }
            var teacher=await _context.Teachers.FindAsync(id);
            if(teacher==null)
            {
                return NotFound();
            }
            teacher.Name=entity.Name;
            teacher.Surname=entity.Surname;
            try{
                await _context.SaveChangesAsync();
            }catch(Exception e){
                Console.WriteLine(e.Message);
                return NotFound();
            }
            return NoContent();
        }
         //localhost:5254/api/teacher/2
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacher(int id)
        {
            var teacher=await _context.Teachers.FindAsync(id);
            if(teacher==null)
            {
                return NotFound();
            }
            _context.Teachers.Remove(teacher);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
