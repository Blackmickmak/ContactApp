using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace ContactApp.Models
{
  public class AuthorizeToken: AuthorizeAttribute
  {
    public override void OnAuthorization(HttpActionContext actionContext)
    {
      if (Authorize(actionContext))
      {
        return;
      }
      base.HandleUnauthorizedRequest(actionContext);
    }

    public bool Authorize(HttpActionContext actionContext)
    {
      bool success = false;
      int userId;
      string token = Convert.ToString(actionContext.Request.Headers.FirstOrDefault( x => x.Key.Equals("token")));
      
      Int32.TryParse(actionContext.Request.Headers.FirstOrDefault(x => x.Key.Equals("userId")).ToString(), out userId);
      if (userId == 1000 && token == "123")
      {
        success = true;
      }
      return success;
    }
  }
}
