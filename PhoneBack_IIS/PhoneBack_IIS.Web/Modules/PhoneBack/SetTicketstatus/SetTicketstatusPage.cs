
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/SetTicketstatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetTicketstatusRow))]
    public class SetTicketstatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/SetTicketstatus/SetTicketstatusIndex.cshtml");
        }
    }
}