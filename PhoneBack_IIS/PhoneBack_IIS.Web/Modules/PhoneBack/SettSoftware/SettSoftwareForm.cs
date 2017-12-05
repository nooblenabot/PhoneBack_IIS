
namespace PhoneBack_IIS.PhoneBack.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PhoneBack.SettSoftware")]
    [BasedOnRow(typeof(Entities.SettSoftwareRow))]
    public class SettSoftwareForm
    {
        [QuarterWidth]
        public Boolean DefaultValue { get; set; }
        [QuarterWidth]
        public Boolean IsActive { get; set; }
        [DateTimeFormatter, QuarterWidth]
        public DateTime InsertDate { get; set; }
        [QuarterWidth]
        public String InsertUsername { get; set; }
        [Updatable(false), QuarterWidth, DateTimeFormatter]
        public DateTime UpdateDate { get; set; }
        [Updatable(false), QuarterWidth]
        public String UpdateUsername { get; set; }
        [Updatable(false)]
        public String Setting { get; set; }
        public String Value { get; set; }
        [Updatable(false)]
        public String Caption { get; set; }
    }
}