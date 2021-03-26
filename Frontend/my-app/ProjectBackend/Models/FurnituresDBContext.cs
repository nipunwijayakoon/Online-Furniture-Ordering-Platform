using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjectBackEnd.Models;
using ProjectBackend.Models;

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

        public DbSet<Shops> Shop { get; set; }

        public DbSet<Cartitems> Cartitems { get; set; }

        public DbSet<ProjectBackEnd.Models.Login> Login { get; set; }
        public DbSet<ProjectBackend.Models.NewDesign> NewDesign_1 { get; set; }
        //public DbSet<WeatherForecast> WeatherForecasts { get; set; }
        public DbSet<EmploModel> Emplos { get; set; } 
        public DbSet<EMP> EMPModel { get; set; }
        public DbSet<ProductModel> Products { get; set; }
        public DbSet<Testone> Testone { get; set; }
        public DbSet<PayModel> Pay { get; set; }
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Shoplist>().HasKey(s => s.Area);
        }

    }
}
