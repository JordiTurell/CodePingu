namespace Pingu.Services.Utils
{
    public class ResponseItem<T>
    {
        public T item { get; set; }
        public string message { get; set; }
        public bool status { get; set; }
    }
}
