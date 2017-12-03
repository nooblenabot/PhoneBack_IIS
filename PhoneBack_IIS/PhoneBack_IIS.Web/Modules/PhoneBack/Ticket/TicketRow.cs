
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
    public sealed class TicketRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Identity Consumer"), ForeignKey("[dbo].[PERSON]", "Id"), LeftJoin("jIdentityConsumer"), TextualField("IdentityConsumerSurname")]
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
        public Int16? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Priority"), ForeignKey("[dbo].[SET_PRIORITYTICKET]", "Id"), LeftJoin("jPriority"), TextualField("PriorityCaption")]
        public Int16? Priority
        {
            get { return Fields.Priority[this]; }
            set { Fields.Priority[this] = value; }
        }

        [DisplayName("Category"), ForeignKey("[dbo].[SET_CATGTICKET]", "Id"), LeftJoin("jCategory"), TextualField("CategoryCaption")]
        public Int16? Category
        {
            get { return Fields.Category[this]; }
            set { Fields.Category[this] = value; }
        }

        [DisplayName("To User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jToUser"), TextualField("ToUserUsername")]
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

        [DisplayName("Identity Consumer Is Active"), Expression("jIdentityConsumer.[IsActive]")]
        public Boolean? IdentityConsumerIsActive
        {
            get { return Fields.IdentityConsumerIsActive[this]; }
            set { Fields.IdentityConsumerIsActive[this] = value; }
        }

        [DisplayName("Identity Consumer Is Archive"), Expression("jIdentityConsumer.[IsArchive]")]
        public Boolean? IdentityConsumerIsArchive
        {
            get { return Fields.IdentityConsumerIsArchive[this]; }
            set { Fields.IdentityConsumerIsArchive[this] = value; }
        }

        [DisplayName("Identity Consumer Insert Date"), Expression("jIdentityConsumer.[InsertDate]")]
        public DateTime? IdentityConsumerInsertDate
        {
            get { return Fields.IdentityConsumerInsertDate[this]; }
            set { Fields.IdentityConsumerInsertDate[this] = value; }
        }

        [DisplayName("Identity Consumer Insert User Id"), Expression("jIdentityConsumer.[InsertUserId]")]
        public Int32? IdentityConsumerInsertUserId
        {
            get { return Fields.IdentityConsumerInsertUserId[this]; }
            set { Fields.IdentityConsumerInsertUserId[this] = value; }
        }

        [DisplayName("Identity Consumer Update Date"), Expression("jIdentityConsumer.[UpdateDate]")]
        public DateTime? IdentityConsumerUpdateDate
        {
            get { return Fields.IdentityConsumerUpdateDate[this]; }
            set { Fields.IdentityConsumerUpdateDate[this] = value; }
        }

        [DisplayName("Identity Consumer Update User Id"), Expression("jIdentityConsumer.[UpdateUserId]")]
        public Int32? IdentityConsumerUpdateUserId
        {
            get { return Fields.IdentityConsumerUpdateUserId[this]; }
            set { Fields.IdentityConsumerUpdateUserId[this] = value; }
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

        [DisplayName("Identity Consumer Inactive Date"), Expression("jIdentityConsumer.[InactiveDate]")]
        public DateTime? IdentityConsumerInactiveDate
        {
            get { return Fields.IdentityConsumerInactiveDate[this]; }
            set { Fields.IdentityConsumerInactiveDate[this] = value; }
        }

        [DisplayName("Identity Consumer Archive Date"), Expression("jIdentityConsumer.[ArchiveDate]")]
        public DateTime? IdentityConsumerArchiveDate
        {
            get { return Fields.IdentityConsumerArchiveDate[this]; }
            set { Fields.IdentityConsumerArchiveDate[this] = value; }
        }

        [DisplayName("Status Default Value"), Expression("jStatus.[DefaultValue]")]
        public Boolean? StatusDefaultValue
        {
            get { return Fields.StatusDefaultValue[this]; }
            set { Fields.StatusDefaultValue[this] = value; }
        }

        [DisplayName("Status Is Active"), Expression("jStatus.[IsActive]")]
        public Boolean? StatusIsActive
        {
            get { return Fields.StatusIsActive[this]; }
            set { Fields.StatusIsActive[this] = value; }
        }

        [DisplayName("Status Insert Date"), Expression("jStatus.[InsertDate]")]
        public DateTime? StatusInsertDate
        {
            get { return Fields.StatusInsertDate[this]; }
            set { Fields.StatusInsertDate[this] = value; }
        }

        [DisplayName("Status Insert User Id"), Expression("jStatus.[InsertUserId]")]
        public Int32? StatusInsertUserId
        {
            get { return Fields.StatusInsertUserId[this]; }
            set { Fields.StatusInsertUserId[this] = value; }
        }

        [DisplayName("Status Update Date"), Expression("jStatus.[UpdateDate]")]
        public DateTime? StatusUpdateDate
        {
            get { return Fields.StatusUpdateDate[this]; }
            set { Fields.StatusUpdateDate[this] = value; }
        }

        [DisplayName("Status Update User Id"), Expression("jStatus.[UpdateUserId]")]
        public Int32? StatusUpdateUserId
        {
            get { return Fields.StatusUpdateUserId[this]; }
            set { Fields.StatusUpdateUserId[this] = value; }
        }

        [DisplayName("Status Caption"), Expression("jStatus.[Caption]")]
        public String StatusCaption
        {
            get { return Fields.StatusCaption[this]; }
            set { Fields.StatusCaption[this] = value; }
        }

        [DisplayName("Priority Default Value"), Expression("jPriority.[DefaultValue]")]
        public Boolean? PriorityDefaultValue
        {
            get { return Fields.PriorityDefaultValue[this]; }
            set { Fields.PriorityDefaultValue[this] = value; }
        }

        [DisplayName("Priority Is Active"), Expression("jPriority.[IsActive]")]
        public Boolean? PriorityIsActive
        {
            get { return Fields.PriorityIsActive[this]; }
            set { Fields.PriorityIsActive[this] = value; }
        }

        [DisplayName("Priority Insert Date"), Expression("jPriority.[InsertDate]")]
        public DateTime? PriorityInsertDate
        {
            get { return Fields.PriorityInsertDate[this]; }
            set { Fields.PriorityInsertDate[this] = value; }
        }

        [DisplayName("Priority Insert User Id"), Expression("jPriority.[InsertUserId]")]
        public Int32? PriorityInsertUserId
        {
            get { return Fields.PriorityInsertUserId[this]; }
            set { Fields.PriorityInsertUserId[this] = value; }
        }

        [DisplayName("Priority Update Date"), Expression("jPriority.[UpdateDate]")]
        public DateTime? PriorityUpdateDate
        {
            get { return Fields.PriorityUpdateDate[this]; }
            set { Fields.PriorityUpdateDate[this] = value; }
        }

        [DisplayName("Priority Update User Id"), Expression("jPriority.[UpdateUserId]")]
        public Int32? PriorityUpdateUserId
        {
            get { return Fields.PriorityUpdateUserId[this]; }
            set { Fields.PriorityUpdateUserId[this] = value; }
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

        [DisplayName("Category Default Value"), Expression("jCategory.[DefaultValue]")]
        public Boolean? CategoryDefaultValue
        {
            get { return Fields.CategoryDefaultValue[this]; }
            set { Fields.CategoryDefaultValue[this] = value; }
        }

        [DisplayName("Category Is Active"), Expression("jCategory.[IsActive]")]
        public Boolean? CategoryIsActive
        {
            get { return Fields.CategoryIsActive[this]; }
            set { Fields.CategoryIsActive[this] = value; }
        }

        [DisplayName("Category Insert Date"), Expression("jCategory.[InsertDate]")]
        public DateTime? CategoryInsertDate
        {
            get { return Fields.CategoryInsertDate[this]; }
            set { Fields.CategoryInsertDate[this] = value; }
        }

        [DisplayName("Category Insert User Id"), Expression("jCategory.[InsertUserId]")]
        public Int32? CategoryInsertUserId
        {
            get { return Fields.CategoryInsertUserId[this]; }
            set { Fields.CategoryInsertUserId[this] = value; }
        }

        [DisplayName("Category Update Date"), Expression("jCategory.[UpdateDate]")]
        public DateTime? CategoryUpdateDate
        {
            get { return Fields.CategoryUpdateDate[this]; }
            set { Fields.CategoryUpdateDate[this] = value; }
        }

        [DisplayName("Category Update User Id"), Expression("jCategory.[UpdateUserId]")]
        public Int32? CategoryUpdateUserId
        {
            get { return Fields.CategoryUpdateUserId[this]; }
            set { Fields.CategoryUpdateUserId[this] = value; }
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

        [DisplayName("To User Email"), Expression("jToUser.[Email]")]
        public String ToUserEmail
        {
            get { return Fields.ToUserEmail[this]; }
            set { Fields.ToUserEmail[this] = value; }
        }

        [DisplayName("To User Source"), Expression("jToUser.[Source]")]
        public String ToUserSource
        {
            get { return Fields.ToUserSource[this]; }
            set { Fields.ToUserSource[this] = value; }
        }

        [DisplayName("To User Password Hash"), Expression("jToUser.[PasswordHash]")]
        public String ToUserPasswordHash
        {
            get { return Fields.ToUserPasswordHash[this]; }
            set { Fields.ToUserPasswordHash[this] = value; }
        }

        [DisplayName("To User Password Salt"), Expression("jToUser.[PasswordSalt]")]
        public String ToUserPasswordSalt
        {
            get { return Fields.ToUserPasswordSalt[this]; }
            set { Fields.ToUserPasswordSalt[this] = value; }
        }

        [DisplayName("To User Last Directory Update"), Expression("jToUser.[LastDirectoryUpdate]")]
        public DateTime? ToUserLastDirectoryUpdate
        {
            get { return Fields.ToUserLastDirectoryUpdate[this]; }
            set { Fields.ToUserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("To User User Image"), Expression("jToUser.[UserImage]")]
        public String ToUserUserImage
        {
            get { return Fields.ToUserUserImage[this]; }
            set { Fields.ToUserUserImage[this] = value; }
        }

        [DisplayName("To User Insert Date"), Expression("jToUser.[InsertDate]")]
        public DateTime? ToUserInsertDate
        {
            get { return Fields.ToUserInsertDate[this]; }
            set { Fields.ToUserInsertDate[this] = value; }
        }

        [DisplayName("To User Insert User Id"), Expression("jToUser.[InsertUserId]")]
        public Int32? ToUserInsertUserId
        {
            get { return Fields.ToUserInsertUserId[this]; }
            set { Fields.ToUserInsertUserId[this] = value; }
        }

        [DisplayName("To User Update Date"), Expression("jToUser.[UpdateDate]")]
        public DateTime? ToUserUpdateDate
        {
            get { return Fields.ToUserUpdateDate[this]; }
            set { Fields.ToUserUpdateDate[this] = value; }
        }

        [DisplayName("To User Update User Id"), Expression("jToUser.[UpdateUserId]")]
        public Int32? ToUserUpdateUserId
        {
            get { return Fields.ToUserUpdateUserId[this]; }
            set { Fields.ToUserUpdateUserId[this] = value; }
        }

        [DisplayName("To User Is Active"), Expression("jToUser.[IsActive]")]
        public Int16? ToUserIsActive
        {
            get { return Fields.ToUserIsActive[this]; }
            set { Fields.ToUserIsActive[this] = value; }
        }

        [DisplayName("To User My Company Id"), Expression("jToUser.[MyCompanyId]")]
        public Int16? ToUserMyCompanyId
        {
            get { return Fields.ToUserMyCompanyId[this]; }
            set { Fields.ToUserMyCompanyId[this] = value; }
        }

        [DisplayName("To User Business Division"), Expression("jToUser.[BusinessDivision]")]
        public Int16? ToUserBusinessDivision
        {
            get { return Fields.ToUserBusinessDivision[this]; }
            set { Fields.ToUserBusinessDivision[this] = value; }
        }

        [DisplayName("To User Phone"), Expression("jToUser.[Phone]")]
        public String ToUserPhone
        {
            get { return Fields.ToUserPhone[this]; }
            set { Fields.ToUserPhone[this] = value; }
        }

        [DisplayName("To User Gsm"), Expression("jToUser.[GSM]")]
        public String ToUserGsm
        {
            get { return Fields.ToUserGsm[this]; }
            set { Fields.ToUserGsm[this] = value; }
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

            public BooleanField IdentityConsumerIsActive;
            public BooleanField IdentityConsumerIsArchive;
            public DateTimeField IdentityConsumerInsertDate;
            public Int32Field IdentityConsumerInsertUserId;
            public DateTimeField IdentityConsumerUpdateDate;
            public Int32Field IdentityConsumerUpdateUserId;
            public StringField IdentityConsumerSurname;
            public StringField IdentityConsumerName;
            public StringField IdentityConsumerMaidenName;
            public Int64Field IdentityConsumerCorporateId;
            public Int16Field IdentityConsumerSexe;
            public StringField IdentityConsumerPhone;
            public StringField IdentityConsumerGsm;
            public StringField IdentityConsumerEmail1;
            public StringField IdentityConsumerCaption;
            public DateTimeField IdentityConsumerInactiveDate;
            public DateTimeField IdentityConsumerArchiveDate;

            public BooleanField StatusDefaultValue;
            public BooleanField StatusIsActive;
            public DateTimeField StatusInsertDate;
            public Int32Field StatusInsertUserId;
            public DateTimeField StatusUpdateDate;
            public Int32Field StatusUpdateUserId;
            public StringField StatusCaption;

            public BooleanField PriorityDefaultValue;
            public BooleanField PriorityIsActive;
            public DateTimeField PriorityInsertDate;
            public Int32Field PriorityInsertUserId;
            public DateTimeField PriorityUpdateDate;
            public Int32Field PriorityUpdateUserId;
            public StringField PriorityCaption;
            public StringField PriorityColor;

            public BooleanField CategoryDefaultValue;
            public BooleanField CategoryIsActive;
            public DateTimeField CategoryInsertDate;
            public Int32Field CategoryInsertUserId;
            public DateTimeField CategoryUpdateDate;
            public Int32Field CategoryUpdateUserId;
            public StringField CategoryCaption;

            public StringField ToUserUsername;
            public StringField ToUserDisplayName;
            public StringField ToUserEmail;
            public StringField ToUserSource;
            public StringField ToUserPasswordHash;
            public StringField ToUserPasswordSalt;
            public DateTimeField ToUserLastDirectoryUpdate;
            public StringField ToUserUserImage;
            public DateTimeField ToUserInsertDate;
            public Int32Field ToUserInsertUserId;
            public DateTimeField ToUserUpdateDate;
            public Int32Field ToUserUpdateUserId;
            public Int16Field ToUserIsActive;
            public Int16Field ToUserMyCompanyId;
            public Int16Field ToUserBusinessDivision;
            public StringField ToUserPhone;
            public StringField ToUserGsm;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.Ticket";
            }
        }
    }
}
