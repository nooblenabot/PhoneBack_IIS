
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/SetConsumerstatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetConsumerstatusRow))]
    public class SetConsumerstatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/SetConsumerstatus/SetConsumerstatusIndex.cshtml");
        }
    }
}