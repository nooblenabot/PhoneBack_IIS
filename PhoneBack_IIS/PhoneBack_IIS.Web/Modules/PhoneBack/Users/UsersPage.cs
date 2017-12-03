
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/Users"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UsersRow))]
    public class UsersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/Users/UsersIndex.cshtml");
        }
    }
}