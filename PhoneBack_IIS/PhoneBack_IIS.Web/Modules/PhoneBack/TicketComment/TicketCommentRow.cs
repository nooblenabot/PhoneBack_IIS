
namespace PhoneBack_IIS.PhoneBack.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PhoneBack"), TableName("[dbo].[TICKET_COMMENT]")]
    [DisplayName("Ticket Comment"), InstanceName("Ticket Comment"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("PhoneBack.TicketComment")]
    public sealed class TicketCommentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Ticket"), NotNull, ForeignKey("[dbo].[TICKET]", "Id"), LeftJoin("jTicket"), TextualField("TicketSubject")]
        public Int64? TicketId
        {
            get { return Fields.TicketId[this]; }
            set { Fields.TicketId[this] = value; }
        }

        [DisplayName("Create Date"), NotNull]
        public DateTime? CreateDate
        {
            get { return Fields.CreateDate[this]; }
            set { Fields.CreateDate[this] = value; }
        }

        [DisplayName("Create User Id"), NotNull]
        public Int32? CreateUserId
        {
            get { return Fields.CreateUserId[this]; }
            set { Fields.CreateUserId[this] = value; }
        }

        [DisplayName("Is Public")]
        public Boolean? IsPublic
        {
            get { return Fields.IsPublic[this]; }
            set { Fields.IsPublic[this] = value; }
        }

        [DisplayName("Comment"), Size(2000), QuickSearch]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Comment; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TicketCommentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field TicketId;
            public DateTimeField CreateDate;
            public Int32Field CreateUserId;
            public BooleanField IsPublic;
            public StringField Comment;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.TicketComment";
            }
        }
    }
}
