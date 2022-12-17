using Pingu.Services.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pingu.Services.Apuntes
{
    public interface IApuntesServices
    {
        Task Delete(Entities.Apuntes item);
        Task<Entities.Apuntes> Edit(Entities.Apuntes item);
        Task<Entities.Apuntes> Create(Entities.Apuntes item);
        Task<Entities.Apuntes> GetItem(Entities.Apuntes item);
        IQueryable<Entities.Apuntes> GetList(RequestList<Entities.Apuntes> request);
    }
}
