
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/Consumer"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ConsumerRow))]
    public class ConsumerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/Consumer/ConsumerIndex.cshtml");
        }
    }
}