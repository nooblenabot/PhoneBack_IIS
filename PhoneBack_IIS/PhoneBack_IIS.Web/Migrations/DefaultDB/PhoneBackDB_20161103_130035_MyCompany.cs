using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103130035)]
    public class PhoneBackDB_20161103_130035_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("IsArchive").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("Name").AsString(100).Nullable()
                .WithColumn("Phone").AsString(20).Nullable()
                .WithColumn("GSM").AsString(20).Nullable()
                .WithColumn("Email1").AsString(140).Nullable()
                .WithColumn("Adress").AsString(200).Nullable()
                .WithColumn("City").AsInt64().NotNullable()
                .WithColumn("Country").AsInt16().NotNullable()
                .WithColumn("Cedex").AsString(50).Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_MYCOMPANY")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_MYCOMPANY")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_MYCOMPANY", "Id");

            Create.ForeignKey("FK_MYCOMPANY_CITY").FromTable("SET_MYCOMPANY").ForeignColumn("City").ToTable("SET_CITY").PrimaryColumn("Id");
            Create.ForeignKey("FK_MYCOMPANY_COUNTRY").FromTable("SET_MYCOMPANY").ForeignColumn("Country").ToTable("SET_COUNTRY").PrimaryColumn("Id");
        }
    }
}