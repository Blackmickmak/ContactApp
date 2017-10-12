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
    public List<Contact> contactList { get; set; }
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

    public Contact()
    {

    }

    public ContactReqRes showContact (ContactReqRes contactList)
    {
      Contact contact;
      
      try
      {
        conn.Open();
        cmd = new SACommand("showContacts", conn);
        cmd.CommandType = System.Data.CommandType.StoredProcedure;
        cmd.Parameters.Add(new SAParameter( "@contact_ID", contactList.id));

        sdr = cmd.ExecuteReader();

        while (sdr.Read())
        {
          contact = new Contact();
          contact.givenName = (string)sdr["GivenName"];
          contact.givenName = (string)sdr["Surname"];
          contact.street = (string)sdr["street"];
          contact.state = (string)sdr["Sate"];
          contact.country = (string)sdr["Country"];
          contact.postCode = (string)sdr["PostCode"];
          contact.phone = (string)sdr["Phone"];
          contact.fax = (string)sdr["Fax"];

          contactList.contactList.Add(contact);
        }
      }
      catch (SAException ex)
      {

        throw ex;
      }
      finally
      {
        conn.Close();
      }
      
      return contactList;
    }

  }
}
