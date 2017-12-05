
namespace PhoneBack_IIS.PhoneBack.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PhoneBack"), TableName("[dbo].[SET_COUNTRY]")]
    [DisplayName("Set Country"), InstanceName("Set Country"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("PhoneBack.Country", Permission = "?")]
    public sealed class SetCountryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Int16? Id
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

        [DisplayName("Name Fr Fr"), Column("Name_FR_fr"), Size(50), NotNull, QuickSearch]
        public String NameFrFr
        {
            get { return Fields.NameFrFr[this]; }
            set { Fields.NameFrFr[this] = value; }
        }

        [DisplayName("Name En Gb"), Column("Name_EN_gb"), Size(50), NotNull]
        public String NameEnGb
        {
            get { return Fields.NameEnGb[this]; }
            set { Fields.NameEnGb[this] = value; }
        }

        [DisplayName("Alpha3"), Column("alpha3"), Size(3), NotNull]
        public String Alpha3
        {
            get { return Fields.Alpha3[this]; }
            set { Fields.Alpha3[this] = value; }
        }

        [DisplayName("Alpha2"), Column("alpha2"), Size(2), NotNull]
        public String Alpha2
        {
            get { return Fields.Alpha2[this]; }
            set { Fields.Alpha2[this] = value; }
        }

        [DisplayName("Code Ue"), Column("CodeUE")]
        public Int16? CodeUe
        {
            get { return Fields.CodeUe[this]; }
            set { Fields.CodeUe[this] = value; }
        }

        [DisplayName("Is Ocode"), Column("ISOcode"), Size(3), NotNull]
        public String IsOcode
        {
            get { return Fields.IsOcode[this]; }
            set { Fields.IsOcode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NameFrFr; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SetCountryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field Id;
            public BooleanField DefaultValue;
            public BooleanField IsActive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField NameFrFr;
            public StringField NameEnGb;
            public StringField Alpha3;
            public StringField Alpha2;
            public Int16Field CodeUe;
            public StringField IsOcode;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.SetCountry";
            }
        }
    }
}
