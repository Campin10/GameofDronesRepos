using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Gameofdrones.Models
{
    public partial class GameofDronesDBContext : DbContext
    {
        public GameofDronesDBContext()
        {
        }

        public GameofDronesDBContext(DbContextOptions<GameofDronesDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<GameStatistics> GameStatistics { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:planestrategico.database.windows.net,1433;Initial Catalog=GameofDronesDB;Persist Security Info=False;User ID=admin_pendb;Password=Finish.2018*;MultipleActiveResultSets=False;Encrypt=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GameStatistics>(entity =>
            {
                entity.HasKey(e => e.IdStatistics);

                entity.Property(e => e.DateSave)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Playername)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
