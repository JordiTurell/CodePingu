using Microsoft.AspNetCore.Mvc;
using Pingu.Services.Usuarios;
using System.Diagnostics;

namespace Pingu.DbApi.Controllers
{
    public class HomeController : Controller
    {
        public HomeController()
        {
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}