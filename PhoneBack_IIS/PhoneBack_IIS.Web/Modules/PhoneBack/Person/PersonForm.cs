
namespace PhoneBack_IIS.PhoneBack.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PhoneBack.Person")]
    [BasedOnRow(typeof(Entities.PersonRow))]
    public class PersonForm
    {
        public Boolean IsActive { get; set; }
        public Boolean IsArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String Surname { get; set; }
        public String Name { get; set; }
        public String MaidenName { get; set; }
        public Int64 CorporateId { get; set; }
        public Int16 Sexe { get; set; }
        public String Phone { get; set; }
        public String Gsm { get; set; }
        public String Email1 { get; set; }
        public String Caption { get; set; }
        public DateTime InactiveDate { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}