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
        public async Task<ResponseList<Entities.Lenguajes>> GetClases([FromBody] RequestList<Entities.Lenguajes> request)
        {
            ResponseList<Entities.Lenguajes> response = new ResponseList<Entities.Lenguajes>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.customdata = _service.GetList(request);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }
    }
}
