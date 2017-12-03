
namespace PhoneBack_IIS.PhoneBack.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PhoneBack.Ticket")]
    [BasedOnRow(typeof(Entities.TicketRow))]
    public class TicketForm
    {
        public Int64 IdentityConsumer { get; set; }
        public DateTime CreateDate { get; set; }
        public Int32 CreateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public DateTime CloseDate { get; set; }
        public Int32 CloseUserId { get; set; }
        public Int16 Status { get; set; }
        public Int16 Priority { get; set; }
        public Int16 Category { get; set; }
        public Int32 ToUserId { get; set; }
        public String Subject { get; set; }
        public String Object { get; set; }
    }
}