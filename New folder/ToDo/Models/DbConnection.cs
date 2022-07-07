using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace ToDo.Models
{
    public partial class DbConnection : DbContext
    {
        public DbConnection()
            : base("name=DbConnectionModel")
        {
            this.Configuration.ProxyCreationEnabled = false;
            this.Configuration.LazyLoadingEnabled = true;
        }

        public virtual DbSet<ToDoTable> ToDoTables { get; set; }
        public virtual DbSet<UserTable> UserTables { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserTable>()
                .HasMany(e => e.ToDoTables)
                .WithRequired(e => e.UserTable)
                .WillCascadeOnDelete(false);
        }
    }
}
