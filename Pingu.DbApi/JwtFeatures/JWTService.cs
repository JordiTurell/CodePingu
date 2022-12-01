using Duende.IdentityServer.Validation;
using Microsoft.AspNetCore.Identity;
using Pingu.Config.Concrete;
using System.IdentityModel.Tokens.Jwt;

namespace Pingu.DbApi.JwtFeatures
{
    public class JWTService : IJWTService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        public JWTService(UserManager<ApplicationUser> userManager) { 
            _userManager = userManager;
        }

        public async Task<bool> ValidatedTokenRequest(string token)
        {
            JwtSecurityToken t = new JwtSecurityTokenHandler().ReadJwtToken(token);
            var user = await _userManager.FindByNameAsync(t.Claims.FirstOrDefault().Value);
            if(user != null) { return true; }
            return false;
        }
    }
}
