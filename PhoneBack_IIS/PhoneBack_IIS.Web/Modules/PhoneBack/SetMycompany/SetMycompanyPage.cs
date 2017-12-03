
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/SetMycompany"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetMycompanyRow))]
    public class SetMycompanyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/SetMycompany/SetMycompanyIndex.cshtml");
        }
    }
}