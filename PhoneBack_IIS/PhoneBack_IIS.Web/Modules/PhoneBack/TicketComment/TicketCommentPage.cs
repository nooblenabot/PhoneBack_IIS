
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/TicketComment"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TicketCommentRow))]
    public class TicketCommentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/TicketComment/TicketCommentIndex.cshtml");
        }
    }
}