using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Pingu.DbApi.JwtFeatures;
using Pingu.Services.Models;
using Pingu.Services.Roles;
using Pingu.Services.Utils;

namespace Pingu.DbApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class RolesController : Controller
    {
        private readonly IJWTService _Jwt;
        private readonly IRolesService _RolesService;

        public RolesController(IJWTService Jwt, IRolesService RolesService)
        {
            _Jwt = Jwt;
            _RolesService = RolesService;
        }

        [Route("Create")]
        [HttpPost]
        public async Task<ResponseItem<RolesVM>> Create(RequestItem<RolesVM> request)
        {
            ResponseItem<RolesVM> response = new ResponseItem<RolesVM>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                RolesVM rol = await _RolesService.Create(request);
                response.item = (rol == null) ? null : rol;
                response.status = (rol == null) ? false : true; 
                response.message = request.token;
            }
            return response;
        }

        [Route("Edit")]
        [HttpPost]
        public async Task<ResponseItem<RolesVM>> Edit(RequestItem<RolesVM> request)
        {
            ResponseItem<RolesVM> response = new ResponseItem<RolesVM>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.item = await _RolesService.Edit(request);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }

        [Route("Delete")]
        [HttpPost]
        public async Task<ResponseItem<bool>> Delete(RequestItem<RolesVM> request)
        {
            ResponseItem<bool> response = new ResponseItem<bool>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.item = await _RolesService.Delete(request);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }

        [Route("GetItem")]
        [HttpPost]
        public async Task<ResponseItem<RolesVM>> GetItem(RequestItem<RolesVM> request)
        {
            ResponseItem<RolesVM> response = new ResponseItem<RolesVM>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                response.item = await _RolesService.GetItem(request);
                response.status = true;
                response.message = request.token;
            }
            return response;
        }

        [Route("GetRoles")]
        [HttpPost]
        public async Task<List<RolesVM>> GetRoles([FromBody] RequestList<RolesVM> request)
        {
            ResponseList<RolesVM> response = new ResponseList<RolesVM>();
            if (await _Jwt.ValidatedTokenRequest(request.token))
            {
                IQueryable<IdentityRole> roles = await _RolesService.GetRoles();
                List<RolesVM> listado = (from d in roles select new RolesVM()
                {
                    Id = Guid.Parse(d.Id),
                    Name = d.Name
                }).ToList();
                response.customdata = listado;
                response.status = true;
                response.message = request.token;
            }
            return response.customdata;
        }
    }
}
