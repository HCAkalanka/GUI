using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApp.Models
{
    public class AppDbContext: DbContext
    {
        public DbSet<User> Users {  get; set; }
        public DbSet<Product> Products { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            string tempPath = Path.GetTempPath();
            string database = "database.db";
            string fullPath = Path.Combine(tempPath, database);
            optionsBuilder.UseSqlite($"Data Source={fullPath}");
        }
    }
}
