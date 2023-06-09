﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServerApp.Data;

#nullable disable

namespace ServerApp.Migrations
{
    [DbContext(typeof(LessonContext))]
    [Migration("20230326104712_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.4");

            modelBuilder.Entity("ServerApp.Models.Class", b =>
                {
                    b.Property<int>("ClassID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("ClassID");

                    b.ToTable("Classes");
                });

            modelBuilder.Entity("ServerApp.Models.Hour", b =>
                {
                    b.Property<int>("HourID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("HourID");

                    b.ToTable("Hours");
                });

            modelBuilder.Entity("ServerApp.Models.Lesson", b =>
                {
                    b.Property<int>("LessonID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("LessonID");

                    b.ToTable("Lessons");
                });

            modelBuilder.Entity("ServerApp.Models.LessonPlan", b =>
                {
                    b.Property<int>("LessonPlanID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ClassID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("HourID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("LessonID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TeacherID")
                        .HasColumnType("INTEGER");

                    b.HasKey("LessonPlanID");

                    b.HasIndex("ClassID");

                    b.HasIndex("HourID");

                    b.HasIndex("LessonID");

                    b.HasIndex("TeacherID");

                    b.ToTable("LessonPlans");
                });

            modelBuilder.Entity("ServerApp.Models.Teacher", b =>
                {
                    b.Property<int>("TeacherID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("TeacherID");

                    b.ToTable("Teachers");
                });

            modelBuilder.Entity("ServerApp.Models.LessonPlan", b =>
                {
                    b.HasOne("ServerApp.Models.Class", "Class")
                        .WithMany()
                        .HasForeignKey("ClassID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServerApp.Models.Hour", "Hour")
                        .WithMany()
                        .HasForeignKey("HourID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServerApp.Models.Lesson", "Lesson")
                        .WithMany()
                        .HasForeignKey("LessonID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServerApp.Models.Teacher", "Teacher")
                        .WithMany()
                        .HasForeignKey("TeacherID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Class");

                    b.Navigation("Hour");

                    b.Navigation("Lesson");

                    b.Navigation("Teacher");
                });
#pragma warning restore 612, 618
        }
    }
}
