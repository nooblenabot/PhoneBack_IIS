using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103130014)]
    public class PhoneBackDB_20161103_130014_Initial : AutoReversingMigration
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
                .Create.Table("SET_TICKETSTATUS")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_TICKETSTATUS")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_TICKETSTATUS", "Id");

            Insert.IntoTable("SET_TICKETSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "New"
            });

            Insert.IntoTable("SET_TICKETSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Open"
            });

            Insert.IntoTable("SET_TICKETSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Waiting from customer"
            });

            Insert.IntoTable("SET_TICKETSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Waiting from User"
            });

            Insert.IntoTable("SET_TICKETSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Cancelled"
            });

            Insert.IntoTable("SET_TICKETSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Resolved"
            });

            Insert.IntoTable("SET_TICKETSTATUS").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Close"
            });

            Action<ICreateTableWithColumnSyntax> addLocalizationColumns = expr => expr
                .WithColumn("TicketStatusId").AsInt16().NotNullable()
                .WithColumn("LanguageId").AsInt16().NotNullable()
                .WithColumn("Caption").AsString(50).Nullable()
               ;

            addLocalizationColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_TICKETSTATUSLang")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addLocalizationColumns(IfDatabase("Oracle")
                .Create.Table("SET_TICKETSTATUSLang")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_TICKETSTATUSLang", "Id");

            Create.ForeignKey("FK_TSTATUS_LANGUAGE").FromTable("SET_TICKETSTATUSLang").ForeignColumn("TicketStatusId").ToTable("SET_TICKETSTATUS").PrimaryColumn("Id");

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 1,
                LanguageId = 1,
                Caption = "New"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 2,
                LanguageId = 1,
                Caption = "Open"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 3,
                LanguageId = 1,
                Caption = "Waiting from customer"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 4,
                LanguageId = 1,
                Caption = "Waiting from User"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 5,
                LanguageId = 1,
                Caption = "Cancelled"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 6,
                LanguageId = 1,
                Caption = "Resolved"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 7,
                LanguageId = 1,
                Caption = "Close"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 1,
                LanguageId = 2,
                Caption = "Nouveau"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 2,
                LanguageId = 2,
                Caption = "Ouvert"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 3,
                LanguageId = 2,
                Caption = "En attente du client"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 4,
                LanguageId = 2,
                Caption = "en attente de l'utilisateur"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 5,
                LanguageId = 2,
                Caption = "Annule"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 6,
                LanguageId = 2,
                Caption = "Resolu"
            });

            Insert.IntoTable("SET_TICKETSTATUSLang").Row(new
            {
                TicketStatusId = 7,
                LanguageId = 2,
                Caption = "Clos"
            });

        }
    }
}