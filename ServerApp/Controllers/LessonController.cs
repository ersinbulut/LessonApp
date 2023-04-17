using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ServerApp.Data;
using ServerApp.Models;

namespace ServerApp.Controllers
{
      //localhost:5254/api/Lesson
    [ApiController]
    [Route("api/[controller]")]
    public class LessonController : ControllerBase
    {
      private readonly LessonContext _context;
      public LessonController(LessonContext context)
      {
         _context=context;
      }

       //localhost:5254/api/lesson
       [HttpGet]
       public async Task<ActionResult> GetLessons()
       {
          var lesson=await _context.Lessons.ToListAsync();
          return Ok(lesson);
       }
       //localhost:5254/api/lesson/2
       [HttpGet("{id}")]
       public async Task<ActionResult> GetLesson(int id)
       {
           var p=await _context.Lessons.FirstOrDefaultAsync(i=>i.LessonID == id);
           if(p==null) 
           {
            return NotFound();
           }  
           return Ok(p);
       }
        [HttpPost]
        public async Task<IActionResult> CreateLesson(Lesson entity)
        {
            _context.Lessons.Add(entity);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetLessons),new {id=entity.LessonID},entity);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateLesson(int id,Lesson entity)
        {
            if(id!=entity.LessonID)
            {
                return BadRequest();
            }
            var lesson=await _context.Lessons.FindAsync(id);
            if(lesson==null)
            {
                return NotFound();
            }
            lesson.Name=entity.Name;
            try{
                await _context.SaveChangesAsync();
            }catch(Exception e){
                Console.WriteLine(e.Message);
                return NotFound();
            }
            return NoContent();
        }
         //localhost:5254/api/lesson/2
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLesson(int id)
        {
            var lesson=await _context.Lessons.FindAsync(id);
            if(lesson==null)
            {
                return NotFound();
            }
            _context.Lessons.Remove(lesson);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
