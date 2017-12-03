using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103130013)]
    public class PhoneBackDB_20161103_130013_Initial : AutoReversingMigration
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
                .WithColumn("Caption").AsString(50).Nullable()
                .WithColumn("Color").AsString(50).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_PRIORITYTICKET")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_PRIORITYTICKET")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_PRIORITYTICKET", "Id");

            Insert.IntoTable("SET_PRIORITYTICKET").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Unknow"

            });

            Insert.IntoTable("SET_PRIORITYTICKET").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Less"
            });

            Insert.IntoTable("SET_PRIORITYTICKET").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Medium"
            });

            Insert.IntoTable("SET_PRIORITYTICKET").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "High"
            });

            Action<ICreateTableWithColumnSyntax> addLocalizationColumns = expr => expr
                .WithColumn("PriorityTicketId").AsInt16().NotNullable()
                .WithColumn("LanguageId").AsInt16().NotNullable()
                .WithColumn("Caption").AsString(50).Nullable()
               ;

            addLocalizationColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_PRIORITYTICKETLang")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addLocalizationColumns(IfDatabase("Oracle")
                .Create.Table("SET_PRIORITYTICKETLang")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_PRIORITYTICKETLang", "Id");

            Create.ForeignKey("FK_PRIOTICKET_LANGUAGE").FromTable("SET_PRIORITYTICKETLang").ForeignColumn("PriorityTicketId").ToTable("SET_PRIORITYTICKET").PrimaryColumn("Id");

            Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            {
                PriorityTicketId = 1,
                LanguageId = 1,
                Caption = "Unknow"
            });

            Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            {
                PriorityTicketId = 2,
                LanguageId = 1,
                Caption = "Less"
            });

            Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            {
                PriorityTicketId = 3,
                LanguageId = 1,
                Caption = "Medium"
            });

            Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            {
                PriorityTicketId = 4,
                LanguageId = 1,
                Caption = "High"
            });

            Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            {
                PriorityTicketId = 1,
                LanguageId = 2,
                Caption = "inconnu"
            });

            Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            {
                PriorityTicketId = 2,
                LanguageId = 2,
                Caption = "Bas"
            });

            Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            {
                PriorityTicketId = 3,
                LanguageId = 2,
                Caption = "Moyen"
            });

            Insert.IntoTable("SET_PRIORITYTICKETLang").Row(new
            {
                PriorityTicketId = 4,
                LanguageId = 2,
                Caption = "Haut"
            });

        }
    }
}