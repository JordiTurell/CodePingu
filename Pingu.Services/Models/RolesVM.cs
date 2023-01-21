using System.ComponentModel.DataAnnotations;

namespace Pingu.Services.Models
{
    public class RolesVM
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}
