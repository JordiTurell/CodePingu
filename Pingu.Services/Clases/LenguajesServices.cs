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
            return (from d in _clasesRepository.GetDbSet() select d);
        }

        public async Task<Lenguajes> Create(Lenguajes request)
        {
            await _clasesRepository.CreateAsync(request);
            return request;
        }

        public async Task<Lenguajes?> Edit(Lenguajes item)
        {
            Lenguajes? l = (from d in _clasesRepository.GetDbSet() where d.Id == item.Id select d).FirstOrDefault();
            if (l == null)
            {
                await _clasesRepository.EditAsync(item);
                return item;
            }
            return null;
        }
    }
}
