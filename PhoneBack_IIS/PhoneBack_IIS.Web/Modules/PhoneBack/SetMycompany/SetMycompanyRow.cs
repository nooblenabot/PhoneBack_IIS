
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
    [LookupScript("PhoneBack.Mycompany", Permission = "?")]
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

        [DisplayName("City"), NotNull, ForeignKey("[dbo].[SET_CITY]", "Id"), LeftJoin("jCity"), TextualField("CityCaption")]
        [LookupEditor(typeof(SetCityRow), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int64? City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Country"), NotNull, ForeignKey("[dbo].[SET_COUNTRY]", "Id"), LeftJoin("jCountry"), TextualField("CountryNameFrFr")]
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

        [DisplayName("Archive Date")]
        public DateTime? ArchiveDate
        {
            get { return Fields.ArchiveDate[this]; }
            set { Fields.ArchiveDate[this] = value; }
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

            public StringField CityCaption;
            public StringField City1;
            public StringField CityPostCode;
            public Int16Field CityCountry;

            public StringField CountryNameFrFr;
    


            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.SetMycompany";
            }
        }
    }
}
