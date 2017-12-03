
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

        [DisplayName("Ticket Identity Consumer"), Expression("jTicket.[IdentityConsumer]")]
        public Int64? TicketIdentityConsumer
        {
            get { return Fields.TicketIdentityConsumer[this]; }
            set { Fields.TicketIdentityConsumer[this] = value; }
        }

        [DisplayName("Ticket Create Date"), Expression("jTicket.[CreateDate]")]
        public DateTime? TicketCreateDate
        {
            get { return Fields.TicketCreateDate[this]; }
            set { Fields.TicketCreateDate[this] = value; }
        }

        [DisplayName("Ticket Create User Id"), Expression("jTicket.[CreateUserId]")]
        public Int32? TicketCreateUserId
        {
            get { return Fields.TicketCreateUserId[this]; }
            set { Fields.TicketCreateUserId[this] = value; }
        }

        [DisplayName("Ticket Update Date"), Expression("jTicket.[UpdateDate]")]
        public DateTime? TicketUpdateDate
        {
            get { return Fields.TicketUpdateDate[this]; }
            set { Fields.TicketUpdateDate[this] = value; }
        }

        [DisplayName("Ticket Update User Id"), Expression("jTicket.[UpdateUserId]")]
        public Int32? TicketUpdateUserId
        {
            get { return Fields.TicketUpdateUserId[this]; }
            set { Fields.TicketUpdateUserId[this] = value; }
        }

        [DisplayName("Ticket Close Date"), Expression("jTicket.[CloseDate]")]
        public DateTime? TicketCloseDate
        {
            get { return Fields.TicketCloseDate[this]; }
            set { Fields.TicketCloseDate[this] = value; }
        }

        [DisplayName("Ticket Close User Id"), Expression("jTicket.[CloseUserId]")]
        public Int32? TicketCloseUserId
        {
            get { return Fields.TicketCloseUserId[this]; }
            set { Fields.TicketCloseUserId[this] = value; }
        }

        [DisplayName("Ticket Status"), Expression("jTicket.[Status]")]
        public Int16? TicketStatus
        {
            get { return Fields.TicketStatus[this]; }
            set { Fields.TicketStatus[this] = value; }
        }

        [DisplayName("Ticket Priority"), Expression("jTicket.[Priority]")]
        public Int16? TicketPriority
        {
            get { return Fields.TicketPriority[this]; }
            set { Fields.TicketPriority[this] = value; }
        }

        [DisplayName("Ticket Category"), Expression("jTicket.[Category]")]
        public Int16? TicketCategory
        {
            get { return Fields.TicketCategory[this]; }
            set { Fields.TicketCategory[this] = value; }
        }

        [DisplayName("Ticket To User Id"), Expression("jTicket.[ToUserId]")]
        public Int32? TicketToUserId
        {
            get { return Fields.TicketToUserId[this]; }
            set { Fields.TicketToUserId[this] = value; }
        }

        [DisplayName("Ticket Subject"), Expression("jTicket.[Subject]")]
        public String TicketSubject
        {
            get { return Fields.TicketSubject[this]; }
            set { Fields.TicketSubject[this] = value; }
        }

        [DisplayName("Ticket Object"), Expression("jTicket.[Object]")]
        public String TicketObject
        {
            get { return Fields.TicketObject[this]; }
            set { Fields.TicketObject[this] = value; }
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

            public Int64Field TicketIdentityConsumer;
            public DateTimeField TicketCreateDate;
            public Int32Field TicketCreateUserId;
            public DateTimeField TicketUpdateDate;
            public Int32Field TicketUpdateUserId;
            public DateTimeField TicketCloseDate;
            public Int32Field TicketCloseUserId;
            public Int16Field TicketStatus;
            public Int16Field TicketPriority;
            public Int16Field TicketCategory;
            public Int32Field TicketToUserId;
            public StringField TicketSubject;
            public StringField TicketObject;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.TicketComment";
            }
        }
    }
}
