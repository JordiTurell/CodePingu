using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Pingu.Entities;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Pingu.Config.Concrete
{
    public class ApplicationUser : IdentityUser
    {
        [DisplayName("NickName*")]
        [Required(ErrorMessage = "*Campo requerido")]
        public string NickName { get; set; } = "";
        public string Password { get; set; }
    }


    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options) {
        }

        public DbSet<Lenguajes> Lenguajes { get; set; }
        public DbSet<Apuntes> Apuntes { get; set; }
    }
}
