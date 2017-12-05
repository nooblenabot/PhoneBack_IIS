
namespace PhoneBack_IIS.PhoneBack.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PhoneBack"), TableName("[dbo].[CONSUMER]")]
    [DisplayName("Consumer"), InstanceName("Consumer"), TwoLevelCached]
    [ReadPermission("Ticket:Read")]
    [ModifyPermission("Administration:General")]
    [LookupScript("PhoneBack.Consumer", Permission = "?")]
    public sealed class ConsumerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Is Morale"), NotNull]
        public Boolean? IsMorale
        {
            get { return Fields.IsMorale[this]; }
            set { Fields.IsMorale[this] = value; }
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

        [DisplayName("Corporate Name"), Size(100), QuickSearch]
        public String CorporateName
        {
            get { return Fields.CorporateName[this]; }
            set { Fields.CorporateName[this] = value; }
        }

        [DisplayName("Consumer Name"), Size(140)]
        public String ConsumerName
        {
            get { return Fields.ConsumerName[this]; }
            set { Fields.ConsumerName[this] = value; }
        }

        [DisplayName("Consumer Status"), ForeignKey("[dbo].[SET_CONSUMERSTATUS]", "Id"), LeftJoin("jConsumerStatus"), TextualField("ConsumerStatusCaption")]
        [LookupEditor(typeof(SetConsumerstatusRow), MinimumResultsForSearch = -1, InplaceAdd = false)]
        public Int16? ConsumerStatus
        {
            get { return Fields.ConsumerStatus[this]; }
            set { Fields.ConsumerStatus[this] = value; }
        }

        [DisplayName("Alert Status Consumer"), Size(200)]
        public String AlertStatusConsumer
        {
            get { return Fields.AlertStatusConsumer[this]; }
            set { Fields.AlertStatusConsumer[this] = value; }
        }

        [DisplayName("Adress 1"), Column("Adress_1"), Size(50)]
        public String Adress1
        {
            get { return Fields.Adress1[this]; }
            set { Fields.Adress1[this] = value; }
        }

        [DisplayName("Adress 2"), Column("Adress_2"), Size(50)]
        public String Adress2
        {
            get { return Fields.Adress2[this]; }
            set { Fields.Adress2[this] = value; }
        }

        [DisplayName("City"), ForeignKey("[dbo].[SET_CITY]", "Id"), LeftJoin("jCity"), TextualField("CityCaption")]
        [LookupEditor(typeof(SetCityRow), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int64? City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Country"), ForeignKey("[dbo].[SET_COUNTRY]", "Id"), LeftJoin("jCountry"), TextualField("CountryNameFrFr")]
        [LookupEditor(typeof(SetCountryRow), MinimumResultsForSearch = -1, InplaceAdd = false)]
        public Int16? Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Cedex"), Size(50)]
        public String Cedex
        {
            get { return Fields.Cedex[this]; }
            set { Fields.Cedex[this] = value; }
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

        [DisplayName("Caption"), Size(500)]
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

        [DisplayName("Consumer Status Caption"), Expression("jConsumerStatus.[Caption]")]
        public String ConsumerStatusCaption
        {
            get { return Fields.ConsumerStatusCaption[this]; }
            set { Fields.ConsumerStatusCaption[this] = value; }
        }

       [DisplayName("City Is Active"), Expression("jCity.[IsActive]")]
        public Boolean? CityIsActive
        {
            get { return Fields.CityIsActive[this]; }
            set { Fields.CityIsActive[this] = value; }
        }
        
        [DisplayName("City Caption"), Expression("jCity.[Caption]")]
        public String CityCaption
        {
            get { return Fields.CityCaption[this]; }
            set { Fields.CityCaption[this] = value; }
        }

        [DisplayName("City"), Expression("jCity.[City]")]
        public String City1
        {
            get { return Fields.City1[this]; }
            set { Fields.City1[this] = value; }
        }

        [DisplayName("City Post Code"), Expression("jCity.[PostCode]")]
        public String CityPostCode
        {
            get { return Fields.CityPostCode[this]; }
            set { Fields.CityPostCode[this] = value; }
        }

        [DisplayName("City Country"), Expression("jCity.[Country]")]
        public Int16? CityCountry
        {
            get { return Fields.CityCountry[this]; }
            set { Fields.CityCountry[this] = value; }
        }

        [DisplayName("Country Name Fr Fr"), Expression("jCountry.[Name_FR_fr]")]
        public String CountryNameFrFr
        {
            get { return Fields.CountryNameFrFr[this]; }
            set { Fields.CountryNameFrFr[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CorporateName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConsumerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public BooleanField IsMorale;
            public BooleanField IsActive;
            public BooleanField IsArchive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField CorporateName;
            public StringField ConsumerName;
            public Int16Field ConsumerStatus;
            public StringField AlertStatusConsumer;
            public StringField Adress1;
            public StringField Adress2;
            public Int64Field City;
            public Int16Field Country;
            public StringField Cedex;
            public StringField Phone;
            public StringField Gsm;
            public StringField Email1;
            public StringField Caption;
            public DateTimeField InactiveDate;
            public DateTimeField ArchiveDate;

            public StringField ConsumerStatusCaption;

            public BooleanField CityIsActive;
            public StringField CityCaption;
            public StringField City1;
            public StringField CityPostCode;
            public Int16Field CityCountry;

            public StringField CountryNameFrFr;



            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.Consumer";
            }
        }
    }
}
