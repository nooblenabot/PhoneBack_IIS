
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/SetCountry"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetCountryRow))]
    public class SetCountryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/SetCountry/SetCountryIndex.cshtml");
        }
    }
}