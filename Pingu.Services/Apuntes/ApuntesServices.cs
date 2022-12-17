using Pingu.Config.Abstract;
using Pingu.Services.Utils;
using System;
using System.Linq;

namespace Pingu.Services.Apuntes
{
    public class ApuntesServices : IApuntesServices
    {
        private readonly IRepository<Entities.Apuntes> _repo;
        
        public ApuntesServices(IRepository<Entities.Apuntes> repo) { 
            _repo = repo;
        }

        public async Task<Entities.Apuntes> Create(Entities.Apuntes item)
        {
            item.avilitado = false;
            item.puntuacion = 0;
            item.visitas= 0;
            item.Fecha = DateTime.Now;

            await _repo.CreateAsync(item);
            return item;
        }

        public async Task Delete(Entities.Apuntes item)
        {
            await _repo.DeleteAsync(item);
        }

        public async Task<Entities.Apuntes> Edit(Entities.Apuntes item)
        {
            await _repo.EditAsync(item);
            return item;
        }

        public Task<Entities.Apuntes> GetItem(Entities.Apuntes item)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Entities.Apuntes> GetList(RequestList<Entities.Apuntes> request)
        {
            return (from d in _repo.GetDbSet() orderby d.Fecha select d);
        }
    }
}
