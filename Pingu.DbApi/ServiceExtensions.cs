using Microsoft.AspNetCore.Identity.UI.Services;
using Pingu.Config.Abstract;
using Pingu.Config.Concrete;
using Pingu.DbApi.JwtFeatures;
using Pingu.Entities;
using Pingu.Services.Apuntes;
using Pingu.Services.Clases;
using Pingu.Services.Roles;
using Pingu.Services.Usuarios;

namespace Pingu.DbApi
{
    public static class ServiceExtensions
    {
        public static void Repositorys(IServiceCollection collection)
        {
            collection.AddScoped<IRepository<Lenguajes>, EfRepository<Lenguajes>>();
            collection.AddScoped<IRepository<Apuntes>, EfRepository<Apuntes>>();

        }

        public static void Interface(IServiceCollection collection)
        {
            collection.AddScoped<JwtHandler>();
            collection.AddScoped<IJWTService, JWTService>();
            collection.AddScoped<ILenguajesServices, LenguajesServices>();
            collection.AddScoped<IApuntesServices, ApuntesServices>();
            collection.AddScoped<IRolesService, RolesService>();
            collection.AddScoped<IUsuariosServices, UsuariosServices>();
        }
        public static void RegisterRepos(this IServiceCollection collection)
        {
            Repositorys(collection);
            Interface(collection);
        }
    }
}
