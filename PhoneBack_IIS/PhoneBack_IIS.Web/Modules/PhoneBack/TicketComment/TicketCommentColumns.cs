
namespace PhoneBack_IIS.PhoneBack.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PhoneBack.TicketComment")]
    [BasedOnRow(typeof(Entities.TicketCommentRow))]
    public class TicketCommentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public String TicketSubject { get; set; }
        public DateTime CreateDate { get; set; }
        public Int32 CreateUserId { get; set; }
        public Boolean IsPublic { get; set; }
        [EditLink]
        public String Comment { get; set; }
    }
}