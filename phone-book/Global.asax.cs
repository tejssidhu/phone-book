using System;
using System.Web.Http;

namespace phone_book
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        private const string ROOT_DOCUMENT = "/phone-book/index.html";

        protected void Application_BeginRequest(Object sender, EventArgs e)
        {
            string url = Request.Url.LocalPath;
            if (!System.IO.File.Exists(Context.Server.MapPath(url)))
                Context.RewritePath(ROOT_DOCUMENT);
        }

        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
