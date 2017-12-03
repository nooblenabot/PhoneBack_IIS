using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103130001)]
    public class PhoneBackDB_20161103_130001_Initial : AutoReversingMigration
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
                .WithColumn("Setting").AsString(30).Nullable()
                .WithColumn("Value").AsString(200).Nullable()
                .WithColumn("Caption").AsString(100).Nullable()
                //.WithColumn("Color").AsString(50).Nullable()
                ;

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SETT_SOFTWARE")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SETT_SOFTWARE")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SETT_SOFTWARE", "Id");

            //Insert.IntoTable("SET_PRIORITYTICKET").Row(new
            //{
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    Caption = "Unknow"

            //});

            //Insert.IntoTable("SET_PRIORITYTICKET").Row(new
            //{
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    Caption = "Less"
            //});

            //Insert.IntoTable("SET_PRIORITYTICKET").Row(new
            //{
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    Caption = "Medium"
            //});

            //Insert.IntoTable("SET_PRIORITYTICKET").Row(new
            //{
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    Caption = "High"
            //});

            Action<ICreateTableWithColumnSyntax> addLocalizationColumns = expr => expr
                .WithColumn("PriorityTicketId").AsInt16().NotNullable()
                .WithColumn("LanguageId").AsInt16().NotNullable()
                .WithColumn("Caption").AsString(50).Nullable()
               ;

            addLocalizationColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SETT_SOFTWARELang")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addLocalizationColumns(IfDatabase("Oracle")
                .Create.Table("SETT_SOFTWARELang")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SETT_SOFTWARELang", "Id");

            Create.ForeignKey("FK_SOFTWARE_LANGUAGE").FromTable("SETT_SOFTWARELang").ForeignColumn("PriorityTicketId").ToTable("SETT_SOFTWARE").PrimaryColumn("Id");

            //Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            //{
            //    PriorityTicketId = 1,
            //    LanguageId = 1,
            //    Caption = "Unknow"
            //});

            //Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            //{
            //    PriorityTicketId = 2,
            //    LanguageId = 1,
            //    Caption = "Less"
            //});

            //Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            //{
            //    PriorityTicketId = 3,
            //    LanguageId = 1,
            //    Caption = "Medium"
            //});

            //Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            //{
            //    PriorityTicketId = 4,
            //    LanguageId = 1,
            //    Caption = "High"
            //});

            //Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            //{
            //    PriorityTicketId = 1,
            //    LanguageId = 2,
            //    Caption = "inconnu"
            //});

            //Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            //{
            //    PriorityTicketId = 2,
            //    LanguageId = 2,
            //    Caption = "Bas"
            //});

            //Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            //{
            //    PriorityTicketId = 3,
            //    LanguageId = 2,
            //    Caption = "Moyen"
            //});

            //Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            //{
            //    PriorityTicketId = 4,
            //    LanguageId = 2,
            //    Caption = "Haut"
            //});

        }
    }
}