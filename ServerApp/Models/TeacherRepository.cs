using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ServerApp.Data;
using ServerApp.DTO;

namespace ServerApp.Models
{
    public class TeacherRepository : IRepository<Teacher>
    {
      private readonly LessonContext _context;
      public TeacherRepository(LessonContext context)
      {
         _context=context;
      }

        public void TAdd(Teacher t)
        {
             _context.Teachers.Add(t);
            _context.SaveChanges();
        }

        public void TDelete(Teacher t)
        {
             var user = _context.Teachers.Find(t.teacherid);
            _context.Teachers.Remove(user);
            _context.SaveChanges();
        }

        public Teacher TGetByID(int id)
        {
            return _context.Teachers.Find(id);
        }

        public List<Teacher> TGetList()
        {
            var teachers= _context.Teachers.ToList();
            return teachers;
        }

        public void TUpdate(Teacher t)
        {
             _context.Teachers.Update(t);
            _context.SaveChanges();
        }
    }
}
