using Pingu.Services.Utils;

namespace Pingu.Services.Clases
{
    public interface ILenguajesServices
    {
        List<Entities.Lenguajes> GetList(RequestList<Entities.Lenguajes> request);
    }
}
