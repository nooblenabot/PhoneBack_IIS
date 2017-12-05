
namespace PhoneBack_IIS.PhoneBack.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PhoneBack.Person")]
    [BasedOnRow(typeof(Entities.PersonRow))]
    public class PersonColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean IsArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String FullConsumer { get; set; }
        [EditLink]
        public String Surname { get; set; }
        public String Name { get; set; }
        public String MaidenName { get; set; }
        public String CorporateCorporateName { get; set; }
        public Gender Sexe { get; set; }
        public String Phone { get; set; }
        public String Gsm { get; set; }
        public String Email1 { get; set; }
        public String Caption { get; set; }
        public DateTime InactiveDate { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}