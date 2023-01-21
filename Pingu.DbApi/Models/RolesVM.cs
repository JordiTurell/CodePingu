using System.ComponentModel.DataAnnotations;

namespace Pingu.DbApi.Models
{
    public class RolesVM
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }    
    }
}
