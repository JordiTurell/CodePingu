namespace Pingu.DbApi.Models
{
    public class ResponseList<T>
    {
        public List<T> customdata { get; set; }
        public string message { get; set; }
        public bool status { get; set; }
    }
}
