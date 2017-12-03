
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/SetBussdiv"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetBussdivRow))]
    public class SetBussdivController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/SetBussdiv/SetBussdivIndex.cshtml");
        }
    }
}