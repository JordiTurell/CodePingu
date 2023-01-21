using Microsoft.AspNetCore.Identity;
using Pingu.Services.Models;
using Pingu.Services.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pingu.Services.Roles
{
    public interface IRolesService
    {
        Task<RolesVM> Create(RequestItem<RolesVM> request);
        Task<RolesVM> Edit(RequestItem<RolesVM> request);
        Task<bool> Delete(RequestItem<RolesVM> request);
        Task<IQueryable<IdentityRole>> GetRoles();
        Task<RolesVM?> GetItem(RequestItem<RolesVM> request);
    }
}
