
namespace PhoneBack_IIS.PhoneBack.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PhoneBack.SetCountry")]
    [BasedOnRow(typeof(Entities.SetCountryRow))]
    public class SetCountryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 Id { get; set; }
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        [EditLink]
        public String NameFrFr { get; set; }
        public String NameEnGb { get; set; }
        public String Alpha3 { get; set; }
        public String Alpha2 { get; set; }
        public Int16 CodeUe { get; set; }
        public String IsOcode { get; set; }
    }
}