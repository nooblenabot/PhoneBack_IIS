
namespace PhoneBack_IIS.PhoneBack.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PhoneBack"), TableName("[dbo].[SET_MYCOMPANY]")]
    [DisplayName("Set Mycompany"), InstanceName("Set Mycompany"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SetMycompanyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int16? Id
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

        [DisplayName("Name"), Size(100), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
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

        [DisplayName("Email1"), Size(140)]
        public String Email1
        {
            get { return Fields.Email1[this]; }
            set { Fields.Email1[this] = value; }
        }

        [DisplayName("Adress"), Size(200)]
        public String Adress
        {
            get { return Fields.Adress[this]; }
            set { Fields.Adress[this] = value; }
        }

        [DisplayName("City"), NotNull, ForeignKey("[dbo].[SET_CITY]", "Id"), LeftJoin("jCity"), TextualField("CityFrCodeInsee")]
        public Int64? City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Country"), NotNull, ForeignKey("[dbo].[SET_COUNTRY]", "Id"), LeftJoin("jCountry"), TextualField("CountryNameFrFr")]
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

        [DisplayName("Archive Date")]
        public DateTime? ArchiveDate
        {
            get { return Fields.ArchiveDate[this]; }
            set { Fields.ArchiveDate[this] = value; }
        }

        [DisplayName("City Default Value"), Expression("jCity.[DefaultValue]")]
        public Boolean? CityDefaultValue
        {
            get { return Fields.CityDefaultValue[this]; }
            set { Fields.CityDefaultValue[this] = value; }
        }

        [DisplayName("City Is Active"), Expression("jCity.[IsActive]")]
        public Boolean? CityIsActive
        {
            get { return Fields.CityIsActive[this]; }
            set { Fields.CityIsActive[this] = value; }
        }

        [DisplayName("City Insert Date"), Expression("jCity.[InsertDate]")]
        public DateTime? CityInsertDate
        {
            get { return Fields.CityInsertDate[this]; }
            set { Fields.CityInsertDate[this] = value; }
        }

        [DisplayName("City Insert User Id"), Expression("jCity.[InsertUserId]")]
        public Int32? CityInsertUserId
        {
            get { return Fields.CityInsertUserId[this]; }
            set { Fields.CityInsertUserId[this] = value; }
        }

        [DisplayName("City Update Date"), Expression("jCity.[UpdateDate]")]
        public DateTime? CityUpdateDate
        {
            get { return Fields.CityUpdateDate[this]; }
            set { Fields.CityUpdateDate[this] = value; }
        }

        [DisplayName("City Update User Id"), Expression("jCity.[UpdateUserId]")]
        public Int32? CityUpdateUserId
        {
            get { return Fields.CityUpdateUserId[this]; }
            set { Fields.CityUpdateUserId[this] = value; }
        }

        [DisplayName("City Fr Code Insee"), Expression("jCity.[FRCodeINSEE]")]
        public String CityFrCodeInsee
        {
            get { return Fields.CityFrCodeInsee[this]; }
            set { Fields.CityFrCodeInsee[this] = value; }
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

        [DisplayName("Country Default Value"), Expression("jCountry.[DefaultValue]")]
        public Boolean? CountryDefaultValue
        {
            get { return Fields.CountryDefaultValue[this]; }
            set { Fields.CountryDefaultValue[this] = value; }
        }

        [DisplayName("Country Is Active"), Expression("jCountry.[IsActive]")]
        public Boolean? CountryIsActive
        {
            get { return Fields.CountryIsActive[this]; }
            set { Fields.CountryIsActive[this] = value; }
        }

        [DisplayName("Country Insert Date"), Expression("jCountry.[InsertDate]")]
        public DateTime? CountryInsertDate
        {
            get { return Fields.CountryInsertDate[this]; }
            set { Fields.CountryInsertDate[this] = value; }
        }

        [DisplayName("Country Insert User Id"), Expression("jCountry.[InsertUserId]")]
        public Int32? CountryInsertUserId
        {
            get { return Fields.CountryInsertUserId[this]; }
            set { Fields.CountryInsertUserId[this] = value; }
        }

        [DisplayName("Country Update Date"), Expression("jCountry.[UpdateDate]")]
        public DateTime? CountryUpdateDate
        {
            get { return Fields.CountryUpdateDate[this]; }
            set { Fields.CountryUpdateDate[this] = value; }
        }

        [DisplayName("Country Update User Id"), Expression("jCountry.[UpdateUserId]")]
        public Int32? CountryUpdateUserId
        {
            get { return Fields.CountryUpdateUserId[this]; }
            set { Fields.CountryUpdateUserId[this] = value; }
        }

        [DisplayName("Country Name Fr Fr"), Expression("jCountry.[Name_FR_fr]")]
        public String CountryNameFrFr
        {
            get { return Fields.CountryNameFrFr[this]; }
            set { Fields.CountryNameFrFr[this] = value; }
        }

        [DisplayName("Country Name En Gb"), Expression("jCountry.[Name_EN_gb]")]
        public String CountryNameEnGb
        {
            get { return Fields.CountryNameEnGb[this]; }
            set { Fields.CountryNameEnGb[this] = value; }
        }

        [DisplayName("Country Alpha3"), Expression("jCountry.[alpha3]")]
        public String CountryAlpha3
        {
            get { return Fields.CountryAlpha3[this]; }
            set { Fields.CountryAlpha3[this] = value; }
        }

        [DisplayName("Country Alpha2"), Expression("jCountry.[alpha2]")]
        public String CountryAlpha2
        {
            get { return Fields.CountryAlpha2[this]; }
            set { Fields.CountryAlpha2[this] = value; }
        }

        [DisplayName("Country Code Ue"), Expression("jCountry.[CodeUE]")]
        public Int16? CountryCodeUe
        {
            get { return Fields.CountryCodeUe[this]; }
            set { Fields.CountryCodeUe[this] = value; }
        }

        [DisplayName("Country Is Ocode"), Expression("jCountry.[ISOcode]")]
        public String CountryIsOcode
        {
            get { return Fields.CountryIsOcode[this]; }
            set { Fields.CountryIsOcode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SetMycompanyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field Id;
            public BooleanField IsActive;
            public BooleanField IsArchive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField Name;
            public StringField Phone;
            public StringField Gsm;
            public StringField Email1;
            public StringField Adress;
            public Int64Field City;
            public Int16Field Country;
            public StringField Cedex;
            public DateTimeField ArchiveDate;

            public BooleanField CityDefaultValue;
            public BooleanField CityIsActive;
            public DateTimeField CityInsertDate;
            public Int32Field CityInsertUserId;
            public DateTimeField CityUpdateDate;
            public Int32Field CityUpdateUserId;
            public StringField CityFrCodeInsee;
            public StringField CityCaption;
            public StringField City1;
            public StringField CityPostCode;
            public Int16Field CityCountry;

            public BooleanField CountryDefaultValue;
            public BooleanField CountryIsActive;
            public DateTimeField CountryInsertDate;
            public Int32Field CountryInsertUserId;
            public DateTimeField CountryUpdateDate;
            public Int32Field CountryUpdateUserId;
            public StringField CountryNameFrFr;
            public StringField CountryNameEnGb;
            public StringField CountryAlpha3;
            public StringField CountryAlpha2;
            public Int16Field CountryCodeUe;
            public StringField CountryIsOcode;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.SetMycompany";
            }
        }
    }
}
