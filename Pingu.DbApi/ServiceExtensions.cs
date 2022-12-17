using Microsoft.AspNetCore.Identity.UI.Services;
using Pingu.Config.Abstract;
using Pingu.Config.Concrete;
using Pingu.DbApi.JwtFeatures;
using Pingu.Entities;
using Pingu.Services.Apuntes;
using Pingu.Services.Clases;

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
        }
        public static void RegisterRepos(this IServiceCollection collection)
        {
            Repositorys(collection);
            Interface(collection);
        }
    }
}
