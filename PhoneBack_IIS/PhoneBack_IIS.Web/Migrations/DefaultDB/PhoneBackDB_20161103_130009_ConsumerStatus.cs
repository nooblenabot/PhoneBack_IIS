using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103130009)]
    public class PhoneBackDB_20161103_130009_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("DefaultValue").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("Caption").AsString(50).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_CONSUMERSTATUS")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_CONSUMERSTATUS")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_CONSUMERSTATUS", "Id");

            Insert.IntoTable("SET_CONSUMERSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Unknow"
            });

            Insert.IntoTable("SET_CONSUMERSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Consumer"
            });

            Insert.IntoTable("SET_CONSUMERSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Old Consumer"
            });

            Insert.IntoTable("SET_CONSUMERSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Blocked"
            });

            Action<ICreateTableWithColumnSyntax> addLocalizationColumns = expr => expr
                .WithColumn("ConsumerStatusId").AsInt16().NotNullable()
                .WithColumn("LanguageId").AsInt16().NotNullable()
                .WithColumn("Caption").AsString(50).Nullable()
               ;

            addLocalizationColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_CONSUMERSTATUSLang")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addLocalizationColumns(IfDatabase("Oracle")
                .Create.Table("SET_CONSUMERSTATUSLang")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_CONSUMERSTATUSLang", "Id");

            Create.ForeignKey("FK_CSTATUS_LANGUAGE").FromTable("SET_CONSUMERSTATUSLang").ForeignColumn("ConsumerStatusId").ToTable("SET_CONSUMERSTATUS").PrimaryColumn("Id");

            Insert.IntoTable("SET_CONSUMERSTATUSLang").Row(new
            {
                ConsumerStatusId = 1,
                LanguageId = 1,
                Caption = "Unknow"
            });

            Insert.IntoTable("SET_CONSUMERSTATUSLang").Row(new
            {
                ConsumerStatusId = 2,
                LanguageId = 1,
                Caption = "Consumer"
            });

            Insert.IntoTable("SET_CONSUMERSTATUSLang").Row(new
            {
                ConsumerStatusId = 3,
                LanguageId = 1,
                Caption = "Old Consumer"
            });

            Insert.IntoTable("SET_CONSUMERSTATUSLang").Row(new
            {
                ConsumerStatusId = 4,
                LanguageId = 1,
                Caption = "Blocked"
            });

            Insert.IntoTable("SET_CONSUMERSTATUSLang").Row(new
            {
                ConsumerStatusId = 1,
                LanguageId = 2,
                Caption = "inconnu"
            });

            Insert.IntoTable("SET_CONSUMERSTATUSLang").Row(new
            {
                ConsumerStatusId = 2,
                LanguageId = 2,
                Caption = "Client"
            });

            Insert.IntoTable("SET_CONSUMERSTATUSLang").Row(new
            {
                ConsumerStatusId = 3,
                LanguageId = 2,
                Caption = "Ancien Client"
            });

            Insert.IntoTable("SET_CONSUMERSTATUSLang").Row(new
            {
                ConsumerStatusId = 4,
                LanguageId = 2,
                Caption = "Client Bloque"
            });

        }
    }
}