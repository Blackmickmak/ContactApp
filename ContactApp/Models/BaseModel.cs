using iAnywhere.Data.SQLAnywhere;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContactApp.Models
{
  public class BaseModel
  {
    protected SAConnection conn = new SAConnection("Data Source=SQL Anywhere 12 Demo; UID = DBA; PWD = sql");
    protected SACommand cmd = null;
    protected SADataReader sdr = null;
    protected SATransaction trn = null;

  }
}
