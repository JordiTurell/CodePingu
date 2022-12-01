namespace Pingu.DbApi.JwtFeatures
{
    public interface IJWTService
    {
        Task<bool> ValidatedTokenRequest(string token);
    }
}
