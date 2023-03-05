using Microsoft.AspNetCore.Identity;
using Pingu.Config.Concrete;
using Pingu.Services.Models;
using Pingu.Services.Utils;
using System.Data.Entity;

namespace Pingu.Services.Usuarios
{
    public class UsuariosServices : IUsuariosServices
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
                
        public UsuariosServices(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task<UsuarioVM> Edit(RequestItem<UsuarioVM> request)
        {
            ApplicationUser user = await _userManager.FindByIdAsync(request.item.Id.ToString());
            if (user != null)
            {
                user.NickName = request.item.Nombre;
                await _userManager.UpdateAsync(user);
                IList<string> roles = await _userManager.GetRolesAsync(user);    
                await _userManager.RemoveFromRolesAsync(user, roles);

                IdentityRole role = await _roleManager.FindByIdAsync(request.item.IdRol.ToString());
                await _userManager.AddToRoleAsync(user, role.Name);
                return request.item;
            }
            return null;
        }

       public async Task<List<UsuarioVM>> GetUsuarios()
        {
            IQueryable<ApplicationUser> users = _userManager.Users;
            List<UsuarioVM> response = new List<UsuarioVM>();
            foreach(ApplicationUser user in users)
            {
             
                response.Add(new UsuarioVM()
                {
                    Id = Guid.Parse(user.Id),
                    Nombre = user.NickName,
                    Rol = _userManager.GetRolesAsync(user).GetAwaiter().GetResult().FirstOrDefault(),
                });
            }
            return response;
        }
    }
}
