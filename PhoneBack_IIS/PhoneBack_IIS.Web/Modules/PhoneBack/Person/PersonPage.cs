
namespace PhoneBack_IIS.PhoneBack.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PhoneBack/Person"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PersonRow))]
    public class PersonController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PhoneBack/Person/PersonIndex.cshtml");
        }
    }
}