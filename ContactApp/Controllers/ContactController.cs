using ContactApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ContactApp.Controllers
{
    [AuthorizeToken]
    public class ContactController : ApiController
    {
      [HttpPost]
      public ContactReqRes showContacts (ContactReqRes res)
      {
          new Contact().showContact(res);
          return res;
      }
  }
}
