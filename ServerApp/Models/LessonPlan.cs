using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models
{
    public class LessonPlan
    {
        public int LessonPlanID { get; set; }
        public int TeacherID { get; set; }
        public virtual Teacher Teacher { get; set; }
          public int LessonID { get; set; }
        public virtual Lesson Lesson { get; set; }
          public int ClassID { get; set; }
        public virtual Class Class { get; set; }
          public int HourID { get; set; }
        public virtual Hour Hour { get; set; }
    }
}
