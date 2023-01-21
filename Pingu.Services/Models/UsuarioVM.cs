using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pingu.Services.Models
{
    public class UsuarioVM
    {
        public Guid Id { get; set; }    
        public string Nombre { get; set; }
        public string Rol { get; set; } = "";
        public Guid IdRol { get; set;  }
    }
}
