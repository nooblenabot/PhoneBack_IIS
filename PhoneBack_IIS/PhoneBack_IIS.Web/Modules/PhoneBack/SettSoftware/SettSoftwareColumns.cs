
namespace PhoneBack_IIS.PhoneBack.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PhoneBack.SettSoftware")]
    [BasedOnRow(typeof(Entities.SettSoftwareRow))]
    public class SettSoftwareColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 Id { get; set; }
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        [EditLink]
        public String Setting { get; set; }
        [EditLink]
        public String Value { get; set; }
        [EditLink]
        public String Caption { get; set; }
        public DateTime InsertDate { get; set; }
        public String InsertUsername { get; set; }
        public DateTime UpdateDate { get; set; }
        public String UpdateUsername { get; set; }

    }
}