using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Pingu.DbApi.JwtFeatures;
using Pingu.Services.Apuntes;
using Pingu.Services.Utils;

namespace Pingu.DbApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ApuntesController : Controller
    {
        private readonly IApuntesServices _apuntesServices;
        private readonly IJWTService _Jwt;

        public ApuntesController(IApuntesServices apuntesServices, IJWTService Jwt)
        {
            _apuntesServices = apuntesServices;
            _Jwt = Jwt;
        }

        [Route("GetApuntes")]
        [HttpPost]
        public async Task<IQueryable<Entities.Apuntes>> GetClases([FromBody] RequestList<Entities.Apuntes> request)
        {
            ResponseList<Entities.Apuntes> response = new ResponseList<Entities.Apuntes>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                return _apuntesServices.GetList(request);
            }
            return null;
        }

        [Route("GetItem")]
        [HttpPost]
        public async Task<ResponseItem<Entities.Apuntes>> GetItem([FromBody] RequestItem<Entities.Apuntes> request)
        {
            ResponseItem<Entities.Apuntes> response = new ResponseItem<Entities.Apuntes>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.item = await _apuntesServices.GetItem(request.item);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }

        [Route("SetApuntes")]
        [HttpPost]
        public async Task<ResponseItem<Entities.Apuntes>> SetApuntes([FromBody] RequestItem<Entities.Apuntes> request)
        {
            ResponseItem<Entities.Apuntes> response = new ResponseItem<Entities.Apuntes>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.item = await _apuntesServices.Create(request.item);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }

        [Route("EditApuntes")]
        [HttpPost]
        public async Task<ResponseItem<Entities.Apuntes>> EditLenguaje([FromBody] RequestItem<Entities.Apuntes> request)
        {
            ResponseItem<Entities.Apuntes> response = new ResponseItem<Entities.Apuntes>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.item = await _apuntesServices.Edit(request.item);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }

        [Route("DeleteApuntes")]
        [HttpPost]
        public async Task<ResponseItem<Entities.Apuntes>> DeleteLenguaje([FromBody] RequestItem<Entities.Apuntes> request)
        {
            ResponseItem<Entities.Apuntes> response = new ResponseItem<Entities.Apuntes>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                await _apuntesServices.Delete(request.item);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }
    }
}
