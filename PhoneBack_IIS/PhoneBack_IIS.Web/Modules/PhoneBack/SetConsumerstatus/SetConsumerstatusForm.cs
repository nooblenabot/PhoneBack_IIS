﻿
namespace PhoneBack_IIS.PhoneBack.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PhoneBack.SetConsumerstatus")]
    [BasedOnRow(typeof(Entities.SetConsumerstatusRow))]
    public class SetConsumerstatusForm
    {
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String Caption { get; set; }
    }
}