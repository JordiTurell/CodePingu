using AutoMapper;
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
    public class Login : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly JwtHandler _jwtHandler;

        public Login(UserManager<ApplicationUser> userManager, JwtHandler jwtHandler)
        {
            _userManager = userManager;
            _jwtHandler = jwtHandler;
        }


        [HttpPost]
        public async Task<IActionResult> Authorize([FromBody] RequestItem<ApplicationUser> userForAuthentication)
        {
            var response = new ResponseItem<Authorize>() {
                status = false,
                item = new Authorize()
                {
                    ErrorMessage = "Invalid Authentication"
                },
                message = ""
            };
            
            var user = await _userManager.FindByNameAsync(userForAuthentication.item.UserName);
            if (user == null || !await _userManager.CheckPasswordAsync(user, userForAuthentication.item.PasswordHash))
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
            return Ok(response);
        }

        [HttpPost]
        public IActionResult Demo([FromBody] RequestItem<string> data)
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
