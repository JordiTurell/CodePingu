using Microsoft.AspNetCore.Identity.UI.Services;
using Pingu.Config.Abstract;
using Pingu.Config.Concrete;
using Pingu.Entities;
using Pingu.Services.Lenguajes;

namespace Pingu.DbApi
{
    public static class ServiceExtensions
    {
        public static void Repositorys(IServiceCollection collection)
        {
            collection.AddScoped<IRepository<Lenguajes>, EfRepository<Lenguajes>>();
        }

        public static void Interface(IServiceCollection collection)
        {
            collection.AddScoped<ILenguajesServices, LenguajesServices>();
        }
        public static void RegisterRepos(this IServiceCollection collection)
        {
            Repositorys(collection);
            Interface(collection);
        }
    }
}
