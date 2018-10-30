using iAnywhere.Data.SQLAnywhere;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace ContactApp.Models
{
  public class BaseModel
  {
    protected SAConnection conn = new SAConnection(ConfigurationManager.AppSettings["AnywhereDemo"]);
    protected SACommand cmd = null;
    protected SADataReader sdr = null;
    protected SATransaction trn = null;

  }
}
