
namespace PhoneBack_IIS.PhoneBack.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PhoneBack"), TableName("[dbo].[PERSON]")]
    [DisplayName("Person"), InstanceName("Person"), TwoLevelCached]
    [ReadPermission("Ticket:Read")]
    [ModifyPermission("Administration:General")]
    [LookupScript("PhoneBack.Person", Permission = "?")]
    public sealed class PersonRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Is Archive"), NotNull]
        public Boolean? IsArchive
        {
            get { return Fields.IsArchive[this]; }
            set { Fields.IsArchive[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
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

        [DisplayName("Surname"), Size(50), QuickSearch]
        public String Surname
        {
            get { return Fields.Surname[this]; }
            set { Fields.Surname[this] = value; }
        }

        [DisplayName("Name"), Size(50)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Maiden Name"), Size(50)]
        public String MaidenName
        {
            get { return Fields.MaidenName[this]; }
            set { Fields.MaidenName[this] = value; }
        }

        [DisplayName("Corporate"), ForeignKey("[dbo].[CONSUMER]", "Id"), LeftJoin("jCorporate"), TextualField("CorporateCorporateName")]
        [LookupEditor(typeof(ConsumerRow), MinimumResultsForSearch = -1, InplaceAdd = false)]
        public Int64? CorporateId
        {
            get { return Fields.CorporateId[this]; }
            set { Fields.CorporateId[this] = value; }
        }

        [DisplayName("Sexe")]
        public Gender? Sexe
        {
            get { return (Gender?)Fields.Sexe[this]; }
            set { Fields.Sexe[this] = (Int16?)value; }
        }

            [DisplayName("Phone"), Size(20)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Gsm"), Column("GSM"), Size(20)]
        public String Gsm
        {
            get { return Fields.Gsm[this]; }
            set { Fields.Gsm[this] = value; }
        }

        [DisplayName("Email1"), Size(80)]
        public String Email1
        {
            get { return Fields.Email1[this]; }
            set { Fields.Email1[this] = value; }
        }

        [DisplayName("Caption"), Size(200)]
        public String Caption
        {
            get { return Fields.Caption[this]; }
            set { Fields.Caption[this] = value; }
        }

        [DisplayName("Inactive Date")]
        public DateTime? InactiveDate
        {
            get { return Fields.InactiveDate[this]; }
            set { Fields.InactiveDate[this] = value; }
        }

        [DisplayName("Archive Date")]
        public DateTime? ArchiveDate
        {
            get { return Fields.ArchiveDate[this]; }
            set { Fields.ArchiveDate[this] = value; }
        }


        [DisplayName("Identity Consumer"),NotMapped, LookupInclude]
        [Expression("CONCAT(CONCAT(CONCAT(CONCAT(CONCAT(CONCAT(CONCAT(T0.[Sexe],' '),T0.[Surname]),' '),T0.[Name]),' ( '),T0.[CorporateId]),')')")]
        public String FullConsumer
        {
            get { return Fields.FullConsumer[this]; }
            set { Fields.FullConsumer[this] = value; }
        }

        [DisplayName("FullName"), NotMapped]
        [Expression("CONCAT(CONCAT(T0.[Sexe],' '),CONCAT(T0.[Surname],CONCAT(' ',T0.[Name])))")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }


        [DisplayName("Corporate Is Morale"), Expression("jCorporate.[IsMorale]")]
        public Boolean? CorporateIsMorale
        {
            get { return Fields.CorporateIsMorale[this]; }
            set { Fields.CorporateIsMorale[this] = value; }
        }

        [DisplayName("Corporate Is Active"), Expression("jCorporate.[IsActive]")]
        public Boolean? CorporateIsActive
        {
            get { return Fields.CorporateIsActive[this]; }
            set { Fields.CorporateIsActive[this] = value; }
        }

        [DisplayName("Corporate Is Archive"), Expression("jCorporate.[IsArchive]")]
        public Boolean? CorporateIsArchive
        {
            get { return Fields.CorporateIsArchive[this]; }
            set { Fields.CorporateIsArchive[this] = value; }
        }

        [DisplayName("Corporate Insert Date"), Expression("jCorporate.[InsertDate]")]
        public DateTime? CorporateInsertDate
        {
            get { return Fields.CorporateInsertDate[this]; }
            set { Fields.CorporateInsertDate[this] = value; }
        }

        [DisplayName("Corporate Insert User Id"), Expression("jCorporate.[InsertUserId]")]
        public Int32? CorporateInsertUserId
        {
            get { return Fields.CorporateInsertUserId[this]; }
            set { Fields.CorporateInsertUserId[this] = value; }
        }

        [DisplayName("Corporate Update Date"), Expression("jCorporate.[UpdateDate]")]
        public DateTime? CorporateUpdateDate
        {
            get { return Fields.CorporateUpdateDate[this]; }
            set { Fields.CorporateUpdateDate[this] = value; }
        }

        [DisplayName("Corporate Update User Id"), Expression("jCorporate.[UpdateUserId]")]
        public Int32? CorporateUpdateUserId
        {
            get { return Fields.CorporateUpdateUserId[this]; }
            set { Fields.CorporateUpdateUserId[this] = value; }
        }

        [DisplayName("Corporate Corporate Name"), Expression("jCorporate.[CorporateName]")]
        public String CorporateCorporateName
        {
            get { return Fields.CorporateCorporateName[this]; }
            set { Fields.CorporateCorporateName[this] = value; }
        }

        [DisplayName("Corporate Consumer Name"), Expression("jCorporate.[ConsumerName]")]
        public String CorporateConsumerName
        {
            get { return Fields.CorporateConsumerName[this]; }
            set { Fields.CorporateConsumerName[this] = value; }
        }

        [DisplayName("Corporate Consumer Status"), Expression("jCorporate.[ConsumerStatus]")]
        public Int16? CorporateConsumerStatus
        {
            get { return Fields.CorporateConsumerStatus[this]; }
            set { Fields.CorporateConsumerStatus[this] = value; }
        }

        [DisplayName("Corporate Alert Status Consumer"), Expression("jCorporate.[AlertStatusConsumer]")]
        public String CorporateAlertStatusConsumer
        {
            get { return Fields.CorporateAlertStatusConsumer[this]; }
            set { Fields.CorporateAlertStatusConsumer[this] = value; }
        }

        [DisplayName("Corporate Adress 1"), Expression("jCorporate.[Adress_1]")]
        public String CorporateAdress1
        {
            get { return Fields.CorporateAdress1[this]; }
            set { Fields.CorporateAdress1[this] = value; }
        }

        [DisplayName("Corporate Adress 2"), Expression("jCorporate.[Adress_2]")]
        public String CorporateAdress2
        {
            get { return Fields.CorporateAdress2[this]; }
            set { Fields.CorporateAdress2[this] = value; }
        }

        [DisplayName("Corporate City"), Expression("jCorporate.[City]")]
        public Int64? CorporateCity
        {
            get { return Fields.CorporateCity[this]; }
            set { Fields.CorporateCity[this] = value; }
        }

        [DisplayName("Corporate Country"), Expression("jCorporate.[Country]")]
        public Int16? CorporateCountry
        {
            get { return Fields.CorporateCountry[this]; }
            set { Fields.CorporateCountry[this] = value; }
        }

        [DisplayName("Corporate Cedex"), Expression("jCorporate.[Cedex]")]
        public String CorporateCedex
        {
            get { return Fields.CorporateCedex[this]; }
            set { Fields.CorporateCedex[this] = value; }
        }

        [DisplayName("Corporate Phone"), Expression("jCorporate.[Phone]")]
        public String CorporatePhone
        {
            get { return Fields.CorporatePhone[this]; }
            set { Fields.CorporatePhone[this] = value; }
        }

        [DisplayName("Corporate Gsm"), Expression("jCorporate.[GSM]")]
        public String CorporateGsm
        {
            get { return Fields.CorporateGsm[this]; }
            set { Fields.CorporateGsm[this] = value; }
        }

        [DisplayName("Corporate Email1"), Expression("jCorporate.[Email1]")]
        public String CorporateEmail1
        {
            get { return Fields.CorporateEmail1[this]; }
            set { Fields.CorporateEmail1[this] = value; }
        }

        [DisplayName("Corporate Caption"), Expression("jCorporate.[Caption]")]
        public String CorporateCaption
        {
            get { return Fields.CorporateCaption[this]; }
            set { Fields.CorporateCaption[this] = value; }
        }

        [DisplayName("Corporate Inactive Date"), Expression("jCorporate.[InactiveDate]")]
        public DateTime? CorporateInactiveDate
        {
            get { return Fields.CorporateInactiveDate[this]; }
            set { Fields.CorporateInactiveDate[this] = value; }
        }

        [DisplayName("Corporate Archive Date"), Expression("jCorporate.[ArchiveDate]")]
        public DateTime? CorporateArchiveDate
        {
            get { return Fields.CorporateArchiveDate[this]; }
            set { Fields.CorporateArchiveDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullConsumer; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PersonRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public BooleanField IsActive;
            public BooleanField IsArchive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField Surname;
            public StringField Name;
            public StringField MaidenName;
            public Int64Field CorporateId;
            public Int16Field Sexe;
            public StringField Phone;
            public StringField Gsm;
            public StringField Email1;
            public StringField Caption;
            public DateTimeField InactiveDate;
            public DateTimeField ArchiveDate;

            public StringField FullConsumer;
            public StringField FullName;

            public BooleanField CorporateIsMorale;
            public BooleanField CorporateIsActive;
            public BooleanField CorporateIsArchive;
            public DateTimeField CorporateInsertDate;
            public Int32Field CorporateInsertUserId;
            public DateTimeField CorporateUpdateDate;
            public Int32Field CorporateUpdateUserId;
            public StringField CorporateCorporateName;
            public StringField CorporateConsumerName;
            public Int16Field CorporateConsumerStatus;
            public StringField CorporateAlertStatusConsumer;
            public StringField CorporateAdress1;
            public StringField CorporateAdress2;
            public Int64Field CorporateCity;
            public Int16Field CorporateCountry;
            public StringField CorporateCedex;
            public StringField CorporatePhone;
            public StringField CorporateGsm;
            public StringField CorporateEmail1;
            public StringField CorporateCaption;
            public DateTimeField CorporateInactiveDate;
            public DateTimeField CorporateArchiveDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.Person";
            }
        }
    }
}
