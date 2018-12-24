using Microsoft.EntityFrameworkCore;

namespace Gameofdrones.Models
{
    public partial class GameofDronesDBContext : DbContext
    {
        public GameofDronesDBContext(DbContextOptions<GameofDronesDBContext> options)
            : base(options)
        {
        }
        public virtual DbSet<GameStatistics> GameStatistics { get; set; }

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
