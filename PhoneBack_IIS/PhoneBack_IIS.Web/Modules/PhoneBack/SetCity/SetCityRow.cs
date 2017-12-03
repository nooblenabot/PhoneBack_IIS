
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
    [LookupScript("PhoneBack.City")]
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
        [LookupEditor(typeof(SetCountryRow), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int16? Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
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
            get { return Fields.Caption; }
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

            public StringField CountryNameFrFr;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.SetCity";
            }
        }
    }
}
