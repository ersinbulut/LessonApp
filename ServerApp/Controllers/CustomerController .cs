using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ServerApp.Models;

namespace ServerApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController  : ControllerBase
    {
    private readonly IRepository<Customer> _repository;

    public CustomerController(IRepository<Customer> repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public IEnumerable<Customer> Get()
    {
        return _repository.GetAll();
    }

    [HttpGet("{id}")]
    public Customer Get(int id)
    {
        return _repository.GetById(id);
    }

    [HttpPost]
    public void Post([FromBody] Customer customer)
    {
        _repository.Add(customer);
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Customer customer)
    {
        customer.Id = id;
        _repository.Update(customer);
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
        _repository.Delete(id);
    }
    }
}
