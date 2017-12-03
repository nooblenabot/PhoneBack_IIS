
namespace PhoneBack_IIS.PhoneBack.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PhoneBack.Ticket")]
    [BasedOnRow(typeof(Entities.TicketRow))]
    public class TicketColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public String IdentityConsumerSurname { get; set; }
        public DateTime CreateDate { get; set; }
        public Int32 CreateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public DateTime CloseDate { get; set; }
        public Int32 CloseUserId { get; set; }
        public String StatusCaption { get; set; }
        public String PriorityCaption { get; set; }
        public String CategoryCaption { get; set; }
        public String ToUserUsername { get; set; }
        [EditLink]
        public String Subject { get; set; }
        public String Object { get; set; }
    }
}