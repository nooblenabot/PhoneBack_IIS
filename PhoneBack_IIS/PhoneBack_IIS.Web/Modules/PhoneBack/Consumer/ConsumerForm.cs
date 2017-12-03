
namespace PhoneBack_IIS.PhoneBack.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PhoneBack.Consumer")]
    [BasedOnRow(typeof(Entities.ConsumerRow))]
    public class ConsumerForm
    {
        public Boolean IsMorale { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean IsArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String CorporateName { get; set; }
        public String ConsumerName { get; set; }
        public Int16 ConsumerStatus { get; set; }
        public String AlertStatusConsumer { get; set; }
        public String Adress1 { get; set; }
        public String Adress2 { get; set; }
        public Int64 City { get; set; }
        public Int16 Country { get; set; }
        public String Cedex { get; set; }
        public String Phone { get; set; }
        public String Gsm { get; set; }
        public String Email1 { get; set; }
        public String Caption { get; set; }
        public DateTime InactiveDate { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}