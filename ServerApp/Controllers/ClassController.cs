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
    [ApiController]
    [Route("api/[controller]")]
    public class ClassController : Controller
    {
      private readonly LessonContext _context;
      public ClassController(LessonContext context)
      {
         _context=context;
      }

       //localhost:5254/api/class
       [HttpGet]
       public async Task<ActionResult> GetClass()
       {
          var clas=await _context.Classes.ToListAsync();
          return Ok(clas);
       }
       //localhost:5254/api/class/2
       [HttpGet("{id}")]
       public async Task<ActionResult> GetClass(int id)
       {
           var p=await _context.Classes.FirstOrDefaultAsync(i=>i.ClassID == id);
           if(p==null) 
           {
            return NotFound();
           }  
           return Ok(p);
       }
        [HttpPost]
        public async Task<IActionResult> CreateClass(Class entity)
        {
            _context.Classes.Add(entity);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetClass),new {id=entity.ClassID},entity);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateClass(int id,Class entity)
        {
            if(id!=entity.ClassID)
            {
                return BadRequest();
            }
            var clas=await _context.Classes.FindAsync(id);
            if(clas==null)
            {
                return NotFound();
            }
            clas.Name=entity.Name;
            try{
                await _context.SaveChangesAsync();
            }catch(Exception e){
                Console.WriteLine(e.Message);
                return NotFound();
            }
            return NoContent();
        }
         //localhost:5254/api/class/2
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClass(int id)
        {
            var clas=await _context.Classes.FindAsync(id);
            if(clas==null)
            {
                return NotFound();
            }
            _context.Classes.Remove(clas);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
