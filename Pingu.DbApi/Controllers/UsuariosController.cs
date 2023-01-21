using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Pingu.DbApi.JwtFeatures;
using Pingu.Services.Models;
using Pingu.Services.Usuarios;
using Pingu.Services.Utils;

namespace Pingu.DbApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : Controller
    {
        private readonly IUsuariosServices _usuariosServices;
        private readonly IJWTService _Jwt;

        public UsuariosController(IUsuariosServices usuariosServices, IJWTService Jwt)
        {
            _usuariosServices = usuariosServices;
            _Jwt = Jwt;
        }

        [Route("Edit")]
        [HttpPost]
        public async Task<ResponseItem<UsuarioVM>> Edit(RequestItem<UsuarioVM> request){
            ResponseItem<UsuarioVM> response = new ResponseItem<UsuarioVM>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.item = await _usuariosServices.Edit(request);
            }
            return response;
        }

        [Route("GetUsuarios")]
        [HttpPost]
        public async Task<List<UsuarioVM>> GetUsuarios([FromBody] RequestList<UsuarioVM> request)
        {
            ResponseList<UsuarioVM> response = new ResponseList<UsuarioVM>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.customdata = await _usuariosServices.GetUsuarios(); ;
                response.status = true;
                response.message = request.token;
            }
            return response.customdata;
        }
    }
}
