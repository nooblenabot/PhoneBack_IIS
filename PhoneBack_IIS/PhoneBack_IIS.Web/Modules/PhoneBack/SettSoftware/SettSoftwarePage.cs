
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/SettSoftware"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SettSoftwareRow))]
    public class SettSoftwareController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/SettSoftware/SettSoftwareIndex.cshtml");
        }
    }
}