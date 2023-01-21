using Pingu.Services.Models;
using Pingu.Services.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pingu.Services.Usuarios
{
    public interface IUsuariosServices
    {
        Task<UsuarioVM> Edit(RequestItem<UsuarioVM> request);
        Task<List<UsuarioVM>> GetUsuarios();
    }
}
