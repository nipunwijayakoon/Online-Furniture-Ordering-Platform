﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjectBackEnd.Models;

namespace ProjectBackEnd.Models
{
    public class FurnituresDBContext : DbContext
    {
        public FurnituresDBContext(DbContextOptions<FurnituresDBContext> options)
        : base(options)
        {
        }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Employee> Employees { get; set; }
        //public DbSet<Furniture> Furnitures { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Order> NewDesign { get; set; }
        public DbSet<ProjectBackEnd.Models.Login> Login { get; set; }
        //public DbSet<WeatherForecast> WeatherForecasts { get; set; }
    }
}