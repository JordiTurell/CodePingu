using Pingu.Config.Abstract;
using Pingu.Services.Utils;

namespace Pingu.Services.Clases
{
    public class LenguajesServices : ILenguajesServices
    {
        private readonly IRepository<Entities.Lenguajes> _clasesRepository;

        public LenguajesServices(IRepository<Entities.Lenguajes> clasesRepository)
        {
            _clasesRepository = clasesRepository;
        }

        public List<Entities.Lenguajes> GetList(RequestList<Entities.Lenguajes> request)
        {
            return (from d in _clasesRepository.GetDbSet() select d).Take(request.items).Skip(request.page).ToList();
        }
    }
}
