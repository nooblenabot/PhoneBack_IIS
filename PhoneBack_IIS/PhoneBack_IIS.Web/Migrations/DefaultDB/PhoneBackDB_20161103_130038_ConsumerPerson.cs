using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103130038)]
    public class PhoneBackDB_20161103_130038_Initial : AutoReversingMigration
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
                .WithColumn("Surname").AsString(50).Nullable()
                .WithColumn("Name").AsString(50).Nullable()
                .WithColumn("MaidenName").AsString(50).Nullable()
                .WithColumn("CorporateId").AsInt64().Nullable()
                .WithColumn("Sexe").AsInt16().Nullable().WithDefaultValue(1)
                .WithColumn("Phone").AsString(20).Nullable()
                .WithColumn("GSM").AsString(20).Nullable()
                .WithColumn("Email1").AsString(80).Nullable()
                .WithColumn("Caption").AsString(200).Nullable()
                .WithColumn("InactiveDate").AsDateTime().Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("PERSON")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("PERSON")
                .WithColumn("Id").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "PERSON", "Id");

            Create.ForeignKey("FK_L_CONSUMER_PERSON").FromTable("PERSON").ForeignColumn("CorporateId").ToTable("CONSUMER").PrimaryColumn("Id");
        }
    }
}