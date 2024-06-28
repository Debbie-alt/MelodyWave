using MelodyWaveAPI1._0.Models;
using Microsoft.EntityFrameworkCore;

public class MelodyWaveContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Music> Music { get; set; }
    public DbSet<Comment> Comments { get; set; }

    public MelodyWaveContext(DbContextOptions<MelodyWaveContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Username).IsRequired().HasMaxLength(50);
            entity.Property(e => e.Email).IsRequired().HasMaxLength(100);
            entity.Property(e => e.PasswordHash).IsRequired();
        });

        modelBuilder.Entity<Music>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Title).IsRequired().HasMaxLength(100);
            entity.Property(e => e.Artist).IsRequired().HasMaxLength(100);
            entity.Property(e => e.Album).HasMaxLength(100);
            entity.Property(e => e.FilePath).IsRequired();

            entity.HasOne(e => e.User)
                  .WithMany(u => u.Music)
                  .HasForeignKey(e => e.UserId);
        });

        modelBuilder.Entity<Comment>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Text).IsRequired().HasMaxLength(500);
            entity.Property(e => e.CreatedAt).IsRequired();

            entity.HasOne(e => e.Music)
                  .WithMany(m => m.Comments)
                  .HasForeignKey(e => e.MusicId);

            entity.HasOne(e => e.User)
                  .WithMany(u => u.Comments)
                  .HasForeignKey(e => e.UserId);
        });
    }
}
