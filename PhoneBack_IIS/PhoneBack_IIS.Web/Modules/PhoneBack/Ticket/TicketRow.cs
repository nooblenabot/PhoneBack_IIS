
namespace PhoneBack_IIS.PhoneBack.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PhoneBack"), TableName("[dbo].[TICKET]")]
    [DisplayName("Ticket"), InstanceName("Ticket"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("PhoneBack.Ticket")]
    public sealed class TicketRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Identity Consumer"), ForeignKey("[dbo].[PERSON]", "Id"), LeftJoin("jIdentityConsumer"), TextualField("IdentityConsumerSurname")]
        [LookupEditor(typeof(PersonRow), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int64? IdentityConsumer
        {
            get { return Fields.IdentityConsumer[this]; }
            set { Fields.IdentityConsumer[this] = value; }
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

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Close Date")]
        public DateTime? CloseDate
        {
            get { return Fields.CloseDate[this]; }
            set { Fields.CloseDate[this] = value; }
        }

        [DisplayName("Close User Id")]
        public Int32? CloseUserId
        {
            get { return Fields.CloseUserId[this]; }
            set { Fields.CloseUserId[this] = value; }
        }

        [DisplayName("Status"), ForeignKey("[dbo].[SET_TICKETSTATUS]", "Id"), LeftJoin("jStatus"), TextualField("StatusCaption")]
        [LookupEditor(typeof(SetTicketstatusRow), MinimumResultsForSearch = -1, InplaceAdd = false)]
        public Int16? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Priority"), ForeignKey("[dbo].[SET_PRIORITYTICKET]", "Id"), LeftJoin("jPriority"), TextualField("PriorityCaption")]
        [LookupEditor(typeof(SetPriorityticketRow), MinimumResultsForSearch = -1, InplaceAdd = false)]
        public Int16? Priority
        {
            get { return Fields.Priority[this]; }
            set { Fields.Priority[this] = value; }
        }

        [DisplayName("Category"), ForeignKey("[dbo].[SET_CATGTICKET]", "Id"), LeftJoin("jCategory"), TextualField("CategoryCaption")]
        [LookupEditor(typeof(SetCatgticketRow), MinimumResultsForSearch = -1, InplaceAdd = false
            //, FilterField = "IsActive", FilterValue = SetSexeRow.IsActive.HasValue(true)
            )]
        public Int16? Category
        {
            get { return Fields.Category[this]; }
            set { Fields.Category[this] = value; }
        }

        [DisplayName("To User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jToUser"), TextualField("ToUserUsername")]
        //[LookupEditor(typeof(Administration.AuthenticationService), MinimumResultsForSearch = -1, InplaceAdd = false)]
        public Int32? ToUserId
        {
            get { return Fields.ToUserId[this]; }
            set { Fields.ToUserId[this] = value; }
        }

        [DisplayName("Subject"), Size(100), QuickSearch]
        public String Subject
        {
            get { return Fields.Subject[this]; }
            set { Fields.Subject[this] = value; }
        }

        [DisplayName("Object"), Size(2000)]
        public String Object
        {
            get { return Fields.Object[this]; }
            set { Fields.Object[this] = value; }
        }

        [DisplayName("Identity Consumer Surname"), Expression("jIdentityConsumer.[Surname]")]
        public String IdentityConsumerSurname
        {
            get { return Fields.IdentityConsumerSurname[this]; }
            set { Fields.IdentityConsumerSurname[this] = value; }
        }

        [DisplayName("Identity Consumer Name"), Expression("jIdentityConsumer.[Name]")]
        public String IdentityConsumerName
        {
            get { return Fields.IdentityConsumerName[this]; }
            set { Fields.IdentityConsumerName[this] = value; }
        }

        [DisplayName("Identity Consumer Maiden Name"), Expression("jIdentityConsumer.[MaidenName]")]
        public String IdentityConsumerMaidenName
        {
            get { return Fields.IdentityConsumerMaidenName[this]; }
            set { Fields.IdentityConsumerMaidenName[this] = value; }
        }

        [DisplayName("Identity Consumer Corporate Id"), Expression("jIdentityConsumer.[CorporateId]")]
        public Int64? IdentityConsumerCorporateId
        {
            get { return Fields.IdentityConsumerCorporateId[this]; }
            set { Fields.IdentityConsumerCorporateId[this] = value; }
        }

        [DisplayName("Identity Consumer Sexe"), Expression("jIdentityConsumer.[Sexe]")]
        public Int16? IdentityConsumerSexe
        {
            get { return Fields.IdentityConsumerSexe[this]; }
            set { Fields.IdentityConsumerSexe[this] = value; }
        }

        [DisplayName("Identity Consumer Phone"), Expression("jIdentityConsumer.[Phone]")]
        public String IdentityConsumerPhone
        {
            get { return Fields.IdentityConsumerPhone[this]; }
            set { Fields.IdentityConsumerPhone[this] = value; }
        }

        [DisplayName("Identity Consumer Gsm"), Expression("jIdentityConsumer.[GSM]")]
        public String IdentityConsumerGsm
        {
            get { return Fields.IdentityConsumerGsm[this]; }
            set { Fields.IdentityConsumerGsm[this] = value; }
        }

        [DisplayName("Identity Consumer Email1"), Expression("jIdentityConsumer.[Email1]")]
        public String IdentityConsumerEmail1
        {
            get { return Fields.IdentityConsumerEmail1[this]; }
            set { Fields.IdentityConsumerEmail1[this] = value; }
        }

        [DisplayName("Identity Consumer Caption"), Expression("jIdentityConsumer.[Caption]")]
        public String IdentityConsumerCaption
        {
            get { return Fields.IdentityConsumerCaption[this]; }
            set { Fields.IdentityConsumerCaption[this] = value; }
        }

        [DisplayName("Status Caption"), Expression("jStatus.[Caption]")]
        public String StatusCaption
        {
            get { return Fields.StatusCaption[this]; }
            set { Fields.StatusCaption[this] = value; }
        }

        [DisplayName("Priority Caption"), Expression("jPriority.[Caption]")]
        public String PriorityCaption
        {
            get { return Fields.PriorityCaption[this]; }
            set { Fields.PriorityCaption[this] = value; }
        }

        [DisplayName("Priority Color"), Expression("jPriority.[Color]")]
        public String PriorityColor
        {
            get { return Fields.PriorityColor[this]; }
            set { Fields.PriorityColor[this] = value; }
        }

        [DisplayName("Category Caption"), Expression("jCategory.[Caption]")]
        public String CategoryCaption
        {
            get { return Fields.CategoryCaption[this]; }
            set { Fields.CategoryCaption[this] = value; }
        }

        [DisplayName("To User Username"), Expression("jToUser.[Username]")]
        public String ToUserUsername
        {
            get { return Fields.ToUserUsername[this]; }
            set { Fields.ToUserUsername[this] = value; }
        }

        [DisplayName("To User Display Name"), Expression("jToUser.[DisplayName]")]
        public String ToUserDisplayName
        {
            get { return Fields.ToUserDisplayName[this]; }
            set { Fields.ToUserDisplayName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Subject; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TicketRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field IdentityConsumer;
            public DateTimeField CreateDate;
            public Int32Field CreateUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public DateTimeField CloseDate;
            public Int32Field CloseUserId;
            public Int16Field Status;
            public Int16Field Priority;
            public Int16Field Category;
            public Int32Field ToUserId;
            public StringField Subject;
            public StringField Object;

            public StringField IdentityConsumerSurname;
            public StringField IdentityConsumerName;
            public StringField IdentityConsumerMaidenName;
            public Int64Field IdentityConsumerCorporateId;
            public Int16Field IdentityConsumerSexe;
            public StringField IdentityConsumerPhone;
            public StringField IdentityConsumerGsm;
            public StringField IdentityConsumerEmail1;
            public StringField IdentityConsumerCaption;

            public StringField StatusCaption;

            public StringField PriorityCaption;
            public StringField PriorityColor;

            public StringField CategoryCaption;

            public StringField ToUserUsername;
            public StringField ToUserDisplayName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.Ticket";
            }
        }
    }
}
