
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/SetPriorityticket"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetPriorityticketRow))]
    public class SetPriorityticketController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/SetPriorityticket/SetPriorityticketIndex.cshtml");
        }
    }
}