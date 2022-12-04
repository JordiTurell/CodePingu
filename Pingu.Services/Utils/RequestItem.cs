using System.ComponentModel.DataAnnotations;

namespace Pingu.Services.Utils
{
    public class RequestItem<T>
    {
        [Required(ErrorMessage = "Pasar el objeto que se necesita")]
        public T item { get; set; }
        
        [Required]
        public string token { get; set; }
    }
}
