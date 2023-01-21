using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using Pingu.Config.Concrete;
using Pingu.Services.Models;
using Pingu.Services.Utils;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Pingu.Services.Roles
{
    public class RolesService : IRolesService
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public RolesService(RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager) { 
            _roleManager = roleManager;
            _userManager = userManager;
        }

        public async Task<RolesVM> Create(RequestItem<RolesVM> request)
        {
            IdentityRole role = await _roleManager.FindByNameAsync(request.item.Name);
            if (role == null)
            {
                await _roleManager.CreateAsync(new IdentityRole()
                {
                    Id = request.item.Id.ToString(),
                    Name = request.item.Name,
                });
                return request.item;
            }
            else
            {
                return null;
            }
        }

        public async Task<RolesVM> Edit(RequestItem<RolesVM> request)
        {
            IdentityRole roles = await _roleManager.FindByIdAsync(request.item.Id.ToString());
            roles.Name = request.item.Name;

            await _roleManager.UpdateAsync(roles);
            return request.item;
        }

        public async Task<bool> Delete(RequestItem<RolesVM> request)
        {
            IdentityRole roles = await _roleManager.FindByIdAsync(request.item.Id.ToString());
            IList<ApplicationUser> users = await _userManager.GetUsersInRoleAsync(roles.Name);

            if(users.Count > 0) { 
                return false;
            }
            else
            {
                await _roleManager.DeleteAsync(roles);
                return true;
            }
        }

        public async Task<IQueryable<IdentityRole>> GetRoles()
        {
            return _roleManager.Roles;
        }

        public async Task<RolesVM> GetItem(RequestItem<RolesVM> request)
        {
            IdentityRole role = await _roleManager.FindByIdAsync(request.item.Id.ToString());
            RolesVM r = new RolesVM()
            {
                Id= Guid.Parse(role.Id),
                Name = role.Name,
            };
            return r;
        }
    }
}
