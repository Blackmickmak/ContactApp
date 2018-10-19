using iAnywhere.Data.SQLAnywhere;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContactApp.Models
{
  public class ContactReqRes
  {
    public int id { get; set; }
    public List<string> message { get; set; }
    public List<Contact> contactList { get; set; }

    public ContactReqRes()
    {
      message = new List<string>();
    }
  }
  public class Contact: BaseModel
  {
    public decimal id { get; set; }
    public string title { get; set; }
    public string surname { get; set; }
    public string givenName { get; set; }
    public string phone { get; set; }
    public string fax { get; set; }
    public string street { get; set; }
    public string city { get; set; }
    public string state { get; set; }
    public string postCode { get; set; }
    public string country { get; set; }

    public Contact(){}

    public ContactReqRes showContact (ContactReqRes reqRes)
    {
      Contact contact;
      reqRes.contactList = new List<Contact>();

      Add.CalcServiceSoapClient cal = new Add.CalcServiceSoapClient("CalcServiceSoap");
      int add = cal.Add(4, 5);
      try
      {
        conn.Open();
       
        
        cmd = new SACommand("ShowContacts", conn);
        cmd.CommandType = System.Data.CommandType.StoredProcedure;
        cmd.Parameters.Add(new SAParameter( "@contact_ID", null));

        sdr = cmd.ExecuteReader();

        while (sdr.Read())
        {
          contact = new Contact();
          contact.givenName = (string)sdr["GivenName"];
          contact.surname = (string)sdr["Surname"];
          contact.street = (string)sdr["Street"];
          contact.state = (string)sdr["State"];
          contact.country = (string)sdr["Country"];
          //contact.postCode = (string)sdr["Postcode"];
          contact.phone = (string)sdr["Phone"];
          contact.fax = (string)sdr["Fax"];

          reqRes.contactList.Add(contact);
        }
      }
      catch (Exception ex)
      {

        reqRes.message.Add(ex.Message);
      }
      
        conn.Close();
         
      return reqRes;
    }

  }
}
