
namespace PhoneBack_IIS.PhoneBack.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PhoneBack"), TableName("[dbo].[Users]")]
    [DisplayName("Users"), InstanceName("Users"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UsersRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Id"), Identity]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Username"), Size(100), NotNull, QuickSearch]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Display Name"), Size(100), NotNull]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Source"), Size(4), NotNull]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("Password Hash"), Size(86), NotNull]
        public String PasswordHash
        {
            get { return Fields.PasswordHash[this]; }
            set { Fields.PasswordHash[this] = value; }
        }

        [DisplayName("Password Salt"), Size(10), NotNull]
        public String PasswordSalt
        {
            get { return Fields.PasswordSalt[this]; }
            set { Fields.PasswordSalt[this] = value; }
        }

        [DisplayName("Last Directory Update")]
        public DateTime? LastDirectoryUpdate
        {
            get { return Fields.LastDirectoryUpdate[this]; }
            set { Fields.LastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User Image"), Size(100)]
        public String UserImage
        {
            get { return Fields.UserImage[this]; }
            set { Fields.UserImage[this] = value; }
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

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("My Company"), ForeignKey("[dbo].[SET_MYCOMPANY]", "Id"), LeftJoin("jMyCompany"), TextualField("MyCompanyName")]
        public Int16? MyCompanyId
        {
            get { return Fields.MyCompanyId[this]; }
            set { Fields.MyCompanyId[this] = value; }
        }

        [DisplayName("Business Division"), ForeignKey("[dbo].[SET_BUSSDIV]", "Id"), LeftJoin("jBusinessDivision"), TextualField("BusinessDivisionCaption")]
        public Int16? BusinessDivision
        {
            get { return Fields.BusinessDivision[this]; }
            set { Fields.BusinessDivision[this] = value; }
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

        [DisplayName("My Company Is Active"), Expression("jMyCompany.[IsActive]")]
        public Boolean? MyCompanyIsActive
        {
            get { return Fields.MyCompanyIsActive[this]; }
            set { Fields.MyCompanyIsActive[this] = value; }
        }

        [DisplayName("My Company Is Archive"), Expression("jMyCompany.[IsArchive]")]
        public Boolean? MyCompanyIsArchive
        {
            get { return Fields.MyCompanyIsArchive[this]; }
            set { Fields.MyCompanyIsArchive[this] = value; }
        }

        [DisplayName("My Company Insert Date"), Expression("jMyCompany.[InsertDate]")]
        public DateTime? MyCompanyInsertDate
        {
            get { return Fields.MyCompanyInsertDate[this]; }
            set { Fields.MyCompanyInsertDate[this] = value; }
        }

        [DisplayName("My Company Insert User Id"), Expression("jMyCompany.[InsertUserId]")]
        public Int32? MyCompanyInsertUserId
        {
            get { return Fields.MyCompanyInsertUserId[this]; }
            set { Fields.MyCompanyInsertUserId[this] = value; }
        }

        [DisplayName("My Company Update Date"), Expression("jMyCompany.[UpdateDate]")]
        public DateTime? MyCompanyUpdateDate
        {
            get { return Fields.MyCompanyUpdateDate[this]; }
            set { Fields.MyCompanyUpdateDate[this] = value; }
        }

        [DisplayName("My Company Update User Id"), Expression("jMyCompany.[UpdateUserId]")]
        public Int32? MyCompanyUpdateUserId
        {
            get { return Fields.MyCompanyUpdateUserId[this]; }
            set { Fields.MyCompanyUpdateUserId[this] = value; }
        }

        [DisplayName("My Company Name"), Expression("jMyCompany.[Name]")]
        public String MyCompanyName
        {
            get { return Fields.MyCompanyName[this]; }
            set { Fields.MyCompanyName[this] = value; }
        }

        [DisplayName("My Company Phone"), Expression("jMyCompany.[Phone]")]
        public String MyCompanyPhone
        {
            get { return Fields.MyCompanyPhone[this]; }
            set { Fields.MyCompanyPhone[this] = value; }
        }

        [DisplayName("My Company Gsm"), Expression("jMyCompany.[GSM]")]
        public String MyCompanyGsm
        {
            get { return Fields.MyCompanyGsm[this]; }
            set { Fields.MyCompanyGsm[this] = value; }
        }

        [DisplayName("My Company Email1"), Expression("jMyCompany.[Email1]")]
        public String MyCompanyEmail1
        {
            get { return Fields.MyCompanyEmail1[this]; }
            set { Fields.MyCompanyEmail1[this] = value; }
        }

        [DisplayName("My Company Adress"), Expression("jMyCompany.[Adress]")]
        public String MyCompanyAdress
        {
            get { return Fields.MyCompanyAdress[this]; }
            set { Fields.MyCompanyAdress[this] = value; }
        }

        [DisplayName("My Company City"), Expression("jMyCompany.[City]")]
        public Int64? MyCompanyCity
        {
            get { return Fields.MyCompanyCity[this]; }
            set { Fields.MyCompanyCity[this] = value; }
        }

        [DisplayName("My Company Country"), Expression("jMyCompany.[Country]")]
        public Int16? MyCompanyCountry
        {
            get { return Fields.MyCompanyCountry[this]; }
            set { Fields.MyCompanyCountry[this] = value; }
        }

        [DisplayName("My Company Cedex"), Expression("jMyCompany.[Cedex]")]
        public String MyCompanyCedex
        {
            get { return Fields.MyCompanyCedex[this]; }
            set { Fields.MyCompanyCedex[this] = value; }
        }

        [DisplayName("My Company Archive Date"), Expression("jMyCompany.[ArchiveDate]")]
        public DateTime? MyCompanyArchiveDate
        {
            get { return Fields.MyCompanyArchiveDate[this]; }
            set { Fields.MyCompanyArchiveDate[this] = value; }
        }

        [DisplayName("Business Division Default Value"), Expression("jBusinessDivision.[DefaultValue]")]
        public Boolean? BusinessDivisionDefaultValue
        {
            get { return Fields.BusinessDivisionDefaultValue[this]; }
            set { Fields.BusinessDivisionDefaultValue[this] = value; }
        }

        [DisplayName("Business Division Is Active"), Expression("jBusinessDivision.[IsActive]")]
        public Boolean? BusinessDivisionIsActive
        {
            get { return Fields.BusinessDivisionIsActive[this]; }
            set { Fields.BusinessDivisionIsActive[this] = value; }
        }

        [DisplayName("Business Division Insert Date"), Expression("jBusinessDivision.[InsertDate]")]
        public DateTime? BusinessDivisionInsertDate
        {
            get { return Fields.BusinessDivisionInsertDate[this]; }
            set { Fields.BusinessDivisionInsertDate[this] = value; }
        }

        [DisplayName("Business Division Insert User Id"), Expression("jBusinessDivision.[InsertUserId]")]
        public Int32? BusinessDivisionInsertUserId
        {
            get { return Fields.BusinessDivisionInsertUserId[this]; }
            set { Fields.BusinessDivisionInsertUserId[this] = value; }
        }

        [DisplayName("Business Division Update Date"), Expression("jBusinessDivision.[UpdateDate]")]
        public DateTime? BusinessDivisionUpdateDate
        {
            get { return Fields.BusinessDivisionUpdateDate[this]; }
            set { Fields.BusinessDivisionUpdateDate[this] = value; }
        }

        [DisplayName("Business Division Update User Id"), Expression("jBusinessDivision.[UpdateUserId]")]
        public Int32? BusinessDivisionUpdateUserId
        {
            get { return Fields.BusinessDivisionUpdateUserId[this]; }
            set { Fields.BusinessDivisionUpdateUserId[this] = value; }
        }

        [DisplayName("Business Division Caption"), Expression("jBusinessDivision.[Caption]")]
        public String BusinessDivisionCaption
        {
            get { return Fields.BusinessDivisionCaption[this]; }
            set { Fields.BusinessDivisionCaption[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Username; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UsersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserId;
            public StringField Username;
            public StringField DisplayName;
            public StringField Email;
            public StringField Source;
            public StringField PasswordHash;
            public StringField PasswordSalt;
            public DateTimeField LastDirectoryUpdate;
            public StringField UserImage;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int16Field IsActive;
            public Int16Field MyCompanyId;
            public Int16Field BusinessDivision;
            public StringField Phone;
            public StringField Gsm;

            public BooleanField MyCompanyIsActive;
            public BooleanField MyCompanyIsArchive;
            public DateTimeField MyCompanyInsertDate;
            public Int32Field MyCompanyInsertUserId;
            public DateTimeField MyCompanyUpdateDate;
            public Int32Field MyCompanyUpdateUserId;
            public StringField MyCompanyName;
            public StringField MyCompanyPhone;
            public StringField MyCompanyGsm;
            public StringField MyCompanyEmail1;
            public StringField MyCompanyAdress;
            public Int64Field MyCompanyCity;
            public Int16Field MyCompanyCountry;
            public StringField MyCompanyCedex;
            public DateTimeField MyCompanyArchiveDate;

            public BooleanField BusinessDivisionDefaultValue;
            public BooleanField BusinessDivisionIsActive;
            public DateTimeField BusinessDivisionInsertDate;
            public Int32Field BusinessDivisionInsertUserId;
            public DateTimeField BusinessDivisionUpdateDate;
            public Int32Field BusinessDivisionUpdateUserId;
            public StringField BusinessDivisionCaption;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PhoneBack.Users";
            }
        }
    }
}
