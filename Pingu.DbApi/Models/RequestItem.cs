using System.ComponentModel.DataAnnotations;

namespace Pingu.DbApi.Models
{
    public class RequestItem<T>
    {
        [Required(ErrorMessage="Pasar el objeto que se necesita")]
        public T item { get; set; }
    }
}
