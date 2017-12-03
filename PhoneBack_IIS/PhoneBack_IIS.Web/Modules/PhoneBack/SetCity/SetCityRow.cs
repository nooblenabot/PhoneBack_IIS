
namespace PhoneBack_IIS.PhoneBack.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PhoneBack"), TableName("[dbo].[SET_CITY]")]
    [DisplayName("Set City"), InstanceName("Set City"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SetCityRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Default Value"), NotNull]
        public Boolean? DefaultValue
        {
            get { return Fields.DefaultValue[this]; }
            set { Fields.DefaultValue[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
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

        [DisplayName("Fr Code Insee"), Column("FRCodeINSEE"), Size(6), QuickSearch]
        public String FrCodeInsee
        {
            get { return Fields.FrCodeInsee[this]; }
            set { Fields.FrCodeInsee[this] = value; }
        }

        [DisplayName("Caption"), Size(50)]
        public String Caption
        {
            get { return Fields.Caption[this]; }
            set { Fields.Caption[this] = value; }
        }

        [DisplayName("City"), Size(50)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Post Code"), Size(6)]
        public String PostCode
        {
            get { return Fields.PostCode[this]; }
            set { Fields.PostCode[this] = value; }
        }

        [DisplayName("Country"), ForeignKey("[dbo].[SET_COUNTRY]", "Id"), LeftJoin("jCountry"), TextualField("CountryNameFrFr")]
        public Int16? Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
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
            get { return Fields.FrCodeInsee; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SetCityRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public BooleanField DefaultValue;
            public BooleanField IsActive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField FrCodeInsee;
            public StringField Caption;
            public StringField City;
            public StringField PostCode;
            public Int16Field Country;

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
                LocalTextPrefix = "PhoneBack.SetCity";
            }
        }
    }
}
