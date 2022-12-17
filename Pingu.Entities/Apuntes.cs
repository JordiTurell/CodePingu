using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pingu.Entities
{
    public class Apuntes
    {
        [Key]
        public Guid Id { get; set; }

        [ForeignKey(nameof(Lenguajes))]
        public Guid IdLenguajes { get; set; }
        public virtual Lenguajes Lenguajes { get; set; }

        public string Titulo { get; set; }
        
        [MaxLength]
        public string Post { get; set; }
        public DateTime Fecha { get; set; }
        public int visitas { get; set; }
        public int puntuacion { get; set; }
        public bool avilitado { get; set; }
    }
}
