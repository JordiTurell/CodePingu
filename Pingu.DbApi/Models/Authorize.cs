namespace Pingu.DbApi.Models
{
    public class Authorize
    {
        public string ErrorMessage { get; set; }
        public bool IsAuthSuccessful { get; set; }
        public string Token { get; set; }
    }
}
