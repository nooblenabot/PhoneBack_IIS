
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/SetCatgticket"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetCatgticketRow))]
    public class SetCatgticketController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/SetCatgticket/SetCatgticketIndex.cshtml");
        }
    }
}