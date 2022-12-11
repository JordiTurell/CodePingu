using Pingu.Config.Abstract;
using Pingu.Entities;
using Pingu.Services.Utils;
using System.Security.Cryptography;

namespace Pingu.Services.Clases
{
    public class LenguajesServices : ILenguajesServices
    {
        private readonly IRepository<Lenguajes> _clasesRepository;

        public LenguajesServices(IRepository<Lenguajes> clasesRepository)
        {
            _clasesRepository = clasesRepository;
        }

        public IQueryable<Lenguajes> GetList(RequestList<Lenguajes> request)
        {
            return (from d in _clasesRepository.GetDbSet() orderby d.Nombre select d);
        }

        public async Task<Lenguajes> GetItem(Lenguajes item)
        {
            return (from d in _clasesRepository.GetDbSet() where d.Id == item.Id select d).FirstOrDefault();
        }

        public async Task<Lenguajes> Create(Lenguajes request)
        {
            await _clasesRepository.CreateAsync(request);
            return request;
        }

        public async Task<Lenguajes?> Edit(Lenguajes item)
        {
            Lenguajes? l = (from d in _clasesRepository.GetDbSet() where d.Id == item.Id select d).FirstOrDefault();
            if (l != null)
            {
                l.Nombre = item.Nombre;
                await _clasesRepository.EditAsync(l);
                return item;
            }
            return null;
        }

        public async Task Delete(Lenguajes item)
        {
            Lenguajes? delete = (from d in _clasesRepository.GetDbSet() where d.Id == item.Id select d).FirstOrDefault();
            if (delete != null)
            {
                await _clasesRepository.DeleteAsync(delete);
            }
        }
    }
}
