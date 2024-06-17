using HouseHoldApp.Models;
using Microsoft.EntityFrameworkCore;

namespace HouseHoldApp.DataAccess
{
    public class HouseholdContext : DbContext
    {
        public HouseholdContext(DbContextOptions<HouseholdContext> options) : base(options) { }

        public DbSet<Users> Users { get; set; }
        public DbSet<UserHousehold> UserHouseholds { get; set; }
        public DbSet<Images> Images { get; set; }
        public DbSet<Household> Households { get; set; }
        public DbSet<HoldholdUser> HoldholdUsers { get; set; }
        public DbSet<Chores> Chores { get; set; }
        public DbSet<Assignments> Assignments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<HoldholdUser>()
                .HasKey(hu => new { hu.UserId, hu.HouseholdId });

            modelBuilder.Entity<HoldholdUser>()
                .HasOne(hu => hu.User)
                .WithMany(u => u.HoldholdUsers)
                .HasForeignKey(hu => hu.UserId);

            modelBuilder.Entity<HoldholdUser>()
                .HasOne(hu => hu.Household)
                .WithMany(h => h.HoldholdUsers)
                .HasForeignKey(hu => hu.HouseholdId);
        }
    }
}
