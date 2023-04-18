using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;

namespace ServerApp.Data
{
    public class LessonContext:DbContext
    {
        public LessonContext(DbContextOptions<LessonContext> options):base(options)
        {
            
        }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<Hour> Hours { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<LessonPlan> LessonPlans { get; set; }
        public DbSet<Customer> Customers { get; set; }
    }
}
