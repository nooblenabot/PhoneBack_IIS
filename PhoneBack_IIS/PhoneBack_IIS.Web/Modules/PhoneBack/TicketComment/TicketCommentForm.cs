
namespace PhoneBack_IIS.PhoneBack.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PhoneBack.TicketComment")]
    [BasedOnRow(typeof(Entities.TicketCommentRow))]
    public class TicketCommentForm
    {
        public Int64 TicketId { get; set; }
        public DateTime CreateDate { get; set; }
        public Int32 CreateUserId { get; set; }
        public Boolean IsPublic { get; set; }
        public String Comment { get; set; }
    }
}