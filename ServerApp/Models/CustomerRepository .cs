using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApp.Data;

namespace ServerApp.Models
{
    public class CustomerRepository : IRepository<Customer>
    {
        private readonly LessonContext _context;

        public CustomerRepository(LessonContext context)
        {
            _context = context;
        }
        public void Add(Customer entity)
        {
            _context.Customers.Add(entity);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
             var user = _context.Customers.Find(id);
            _context.Customers.Remove(user);
            _context.SaveChanges();
        }

        public IEnumerable<Customer> GetAll()
        {
             return _context.Customers.ToList();
        }

        public Customer GetById(int id)
        {
             return _context.Customers.Find(id);
        }

        public void Update(Customer entity)
        {
            _context.Customers.Update(entity);
            _context.SaveChanges();
        }
    }
}
