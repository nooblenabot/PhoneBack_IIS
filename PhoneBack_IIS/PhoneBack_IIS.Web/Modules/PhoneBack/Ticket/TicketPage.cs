
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/Ticket"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TicketRow))]
    public class TicketController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/Ticket/TicketIndex.cshtml");
        }
    }
}