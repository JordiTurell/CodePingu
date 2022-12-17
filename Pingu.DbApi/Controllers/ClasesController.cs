using Microsoft.AspNetCore.Mvc;
using Pingu.DbApi.JwtFeatures;
using Pingu.Services.Clases;
using Pingu.Services.Utils;

namespace Pingu.DbApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClasesController:Controller
    {
        private readonly ILenguajesServices _service;
        private readonly IJWTService _Jwt;

        public ClasesController(ILenguajesServices service, IJWTService Jwt)
        {
            _service = service;
            _Jwt = Jwt;
        }

        [Route("GetClases")]
        [HttpPost]
        public async Task<IQueryable<Entities.Lenguajes>> GetClases([FromBody] RequestList<Entities.Lenguajes> request)
        {
            ResponseList<Entities.Lenguajes> response = new ResponseList<Entities.Lenguajes>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                return _service.GetList(request);                
            }
            return null;
        }

        [Route("GetItem")]
        [HttpPost]
        public async Task<ResponseItem<Entities.Lenguajes>> GetClase([FromBody] RequestItem<Entities.Lenguajes> request)
        {
            ResponseItem<Entities.Lenguajes> response = new ResponseItem<Entities.Lenguajes>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.item = await _service.GetItem(request.item);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }

        [Route("SetClases")]
        [HttpPost]
        public async Task<ResponseItem<Entities.Lenguajes>> SetLenguaje([FromBody] RequestItem<Entities.Lenguajes> request)
        {
            ResponseItem<Entities.Lenguajes> response = new ResponseItem<Entities.Lenguajes>();
            if(await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.item = await _service.Create(request.item);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }

        [Route("EditClases")]
        [HttpPost]
        public async Task<ResponseItem<Entities.Lenguajes>> EditLenguaje([FromBody] RequestItem<Entities.Lenguajes> request)
        {
            ResponseItem<Entities.Lenguajes> response = new ResponseItem<Entities.Lenguajes>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.item = await _service.Edit(request.item);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }

        [Route("DeleteClases")]
        [HttpPost]
        public async Task<ResponseItem<Entities.Lenguajes>> DeleteLenguaje([FromBody] RequestItem<Entities.Lenguajes> request)
        {
            ResponseItem<Entities.Lenguajes> response = new ResponseItem<Entities.Lenguajes>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                await _service.Delete(request.item);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }
    }
}
