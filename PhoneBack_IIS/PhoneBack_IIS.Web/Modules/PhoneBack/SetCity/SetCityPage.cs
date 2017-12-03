
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/SetCity"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetCityRow))]
    public class SetCityController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/SetCity/SetCityIndex.cshtml");
        }
    }
}