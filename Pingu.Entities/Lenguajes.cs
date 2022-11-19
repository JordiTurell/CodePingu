using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pingu.Entities
{
    public class Lenguajes
    {
        [Key]
        public Guid Id { get; set; }
        public string Lenguaje { get; set; } = "";
    }
}
