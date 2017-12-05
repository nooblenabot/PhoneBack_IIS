
namespace PhoneBack_IIS.PhoneBack.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PhoneBack"), TableName("[dbo].[SETT_SOFTWARE]")]
    [DisplayName("Sett Software"), InstanceName("Sett Software"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("PhoneBack.SettSoftware")]
    public sealed class SettSoftwareRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Default Value"), NotNull, Updatable(false), HideOnInsert]
        public Boolean? DefaultValue
        {
            get { return Fields.DefaultValue[this]; }
            set { Fields.DefaultValue[this] = value; }
        }

        [DisplayName("Is Active"), NotNull,LookupInclude]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Insert Date"), HideOnInsert, Updatable(false), DateTimeFormatter]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"), HideOnInsert, Updatable(false), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIUser"), TextualField("InsertUsername")]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date"), HideOnInsert, DateTimeFormatter]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id"), HideOnInsert, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUUser"), TextualField("UpdateUsername")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Setting"), Size(30), QuickSearch]
        public String Setting
        {
            get { return Fields.Setting[this]; }
            set { Fields.Setting[this] = value; }
        }

        [DisplayName("Value"), Size(200)]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        [DisplayName("Caption"), Size(100)]
        public String Caption
        {
            get { return Fields.Caption[this]; }
            set { Fields.Caption[this] = value; }
        }

        [DisplayName("Username"), Expression("jIUser.[Username]"), HideOnInsert, Updatable(false)]
        public String InsertUsername
        {
            get { return Fields.InsertUsername[this]; }
            set { Fields.InsertUsername[this] = value; }
        }

        [DisplayName("Username"), Expression("jUUser.[Username]"), HideOnInsert]
        public String UpdateUsername
        {
            get { return Fields.UpdateUsername[this]; }
            set { Fields.UpdateUsername[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Setting; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SettSoftwareRow()
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
            public StringField Setting;
            public StringField Value;
            public StringField Caption;

            public StringField InsertUsername;
            public StringField UpdateUsername;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.SettSoftware";
            }
        }
    }
}
