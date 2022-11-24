using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Pingu.Config.Concrete;
using Pingu.DbApi.JwtFeatures;
using Pingu.DbApi.Models;
using System.IdentityModel.Tokens.Jwt;

namespace Pingu.DbApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Login : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly JwtHandler _jwtHandler;
        
        public Login(UserManager<ApplicationUser> userManager, JwtHandler jwtHandler)
        {
            _userManager = userManager;
            _jwtHandler = jwtHandler;
        }

        [Route("ValidateToken")]
        [HttpPost]
        public async Task<IActionResult> ValidateToken([FromBody] RequestItem<string> token)
        {
            JwtSecurityToken t = new JwtSecurityTokenHandler().ReadJwtToken(token.item);
            var a = t;
            return Ok(t);
        }

        [Route("Acceso")]
        [HttpPost]
        public async Task<IActionResult> Acceso([FromBody] RequestItem<UsersVM> userForAuthentication)
        {
            var response = new ResponseItem<Authorize>() {
                status = false,
                item = new Authorize()
                {
                    ErrorMessage = "Invalid Authentication"
                },
                message = ""
            };
            
            var user = await _userManager.FindByNameAsync(userForAuthentication.item.user);
            if (user == null || !await _userManager.CheckPasswordAsync(user, userForAuthentication.item.password))
            {
                return Unauthorized(response);
            }

            var signingCredentials = _jwtHandler.GetSigningCredentials();
            var claims = _jwtHandler.GetClaims(user);
            var tokenOptions = _jwtHandler.GenerateTokenOptions(signingCredentials, claims);
            var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            
            response.status = true;
            response.item.IsAuthSuccessful = true;
            response.item.Token = token;
            response.item.ErrorMessage = "";
            return Ok(response);
        }

        [Route("Demo")]
        [HttpPost]
        public IActionResult Demo(RequestItem<string> data)
        {
            if(data.item == "holi")
            {
                return Ok(data);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
