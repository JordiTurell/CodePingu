using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Pingu.Config.Abstract;
using Pingu.Config.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pingu.Services.Usuarios
{
    public class UsuariosServices : IUsuariosServices
    {
        private readonly UserManager<ApplicationUser> _userManager;
        
        public UsuariosServices(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task CreateUser()
        {
            ApplicationUser u = new ApplicationUser() {
                UserName = "jorditn84@hotmail.com",
                Email = "jorditn84@hotmail.com",
                EmailConfirmed = true,
                LockoutEnabled = true,
                NickName = "Z4dk1el"
            };

            IdentityResult result = await _userManager.CreateAsync(u, "Sawamura1984");
            if (result.Succeeded)
            {
                var a = "fds";
            }
        }
    }
}
