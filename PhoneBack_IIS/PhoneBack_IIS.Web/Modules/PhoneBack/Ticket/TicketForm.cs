
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
        [HalfWidth,HideOnUpdate]
        public DateTime CloseDate { get; set; }
        [HalfWidth,HideOnUpdate]
        public Int32 CloseUserId { get; set; }
        [DateTimeFormatter, QuarterWidth]
        public DateTime CreateDate { get; set; }
        [QuarterWidth]
        public String CreateUsername { get; set; }
        [Updatable(false), QuarterWidth, DateTimeFormatter]
        public DateTime UpdateDate { get; set; }
        [Updatable(false), QuarterWidth]
        public String UpdateUsername { get; set; }
        public Int64 IdentityConsumer { get; set; }
        public Int16 Status { get; set; }
        public Int16 Priority { get; set; }
        public Int16 Category { get; set; }
        public Int16 ToDepartmentId { get; set; }
        public Int32 ToUserId { get; set; }
        public String Subject { get; set; }
        public String Object { get; set; }
       
    }
}