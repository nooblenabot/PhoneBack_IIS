
namespace PhoneBack_IIS.PhoneBack.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PhoneBack.SetMycompany")]
    [BasedOnRow(typeof(Entities.SetMycompanyRow))]
    public class SetMycompanyForm
    {
        public Boolean IsActive { get; set; }
        public Boolean IsArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String Name { get; set; }
        public String Phone { get; set; }
        public String Gsm { get; set; }
        public String Email1 { get; set; }
        public String Adress { get; set; }
        public Int64 City { get; set; }
        public Int16 Country { get; set; }
        public String Cedex { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}