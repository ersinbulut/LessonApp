using Microsoft.EntityFrameworkCore;
using ServerApp.Data;
using ServerApp.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<IRepository<Teacher>,TeacherRepository>();



builder.Services.AddDbContext<LessonContext>(x=>x.UseSqlite("Data Source=Lesson.db"));

var  MyAllowOrigins = "_myAllowOrigins";

builder.Services.AddCors(options=>{
    options.AddPolicy(
        name:MyAllowOrigins,
        builder=>{
            builder
           .WithOrigins("http://localhost:4200")
           .AllowAnyHeader()
           .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseCors(MyAllowOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
