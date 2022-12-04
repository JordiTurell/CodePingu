using Pingu.Entities;
using Pingu.Services.Utils;

namespace Pingu.Services.Clases
{
    public interface ILenguajesServices
    {
        IQueryable<Lenguajes> GetList(RequestList<Lenguajes> request);
        Task<Lenguajes> Create(Lenguajes request);
        Task<Lenguajes?> Edit(Lenguajes item);
    }
}
