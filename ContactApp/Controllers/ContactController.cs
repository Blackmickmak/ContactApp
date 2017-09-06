using ContactApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ContactApp.Controllers
{
    public class ContactController : ApiController
    {
      [HttpPost]
      public ContactReqRes showContacts (ContactReqRes res)
      {
         return new Contact().showContact(res);
      }
  }
}
