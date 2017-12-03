
namespace PhoneBack_IIS.PhoneBack.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PhoneBack.Consumer")]
    [BasedOnRow(typeof(Entities.ConsumerRow))]
    public class ConsumerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public Boolean IsMorale { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean IsArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        [EditLink]
        public String CorporateName { get; set; }
        public String ConsumerName { get; set; }
        public String ConsumerStatusCaption { get; set; }
        public String AlertStatusConsumer { get; set; }
        public String Adress1 { get; set; }
        public String Adress2 { get; set; }
        public String CityFrCodeInsee { get; set; }
        public String CountryNameFrFr { get; set; }
        public String Cedex { get; set; }
        public String Phone { get; set; }
        public String Gsm { get; set; }
        public String Email1 { get; set; }
        public String Caption { get; set; }
        public DateTime InactiveDate { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}