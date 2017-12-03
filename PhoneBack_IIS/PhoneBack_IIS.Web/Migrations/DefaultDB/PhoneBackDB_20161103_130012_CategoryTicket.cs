using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103130012)]
    public class PhoneBackDB_20161103_130012_Initial : AutoReversingMigration
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
                ;

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_CATGTICKET")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_CATGTICKET")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_CATGTICKET", "Id");

            Action<ICreateTableWithColumnSyntax> addLocalizationColumns = expr => expr
                .WithColumn("CategoryTicketId").AsInt16().NotNullable()
                .WithColumn("LanguageId").AsInt16().NotNullable()
                .WithColumn("Caption").AsString(50).Nullable()
               ;

            addLocalizationColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_CATGTICKETLang")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addLocalizationColumns(IfDatabase("Oracle")
                .Create.Table("SET_CATGTICKETLang")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_CATGTICKETLang", "Id");

            Create.ForeignKey("FK_CATTICKET_LANGUAGE").FromTable("SET_CATGTICKETLang").ForeignColumn("CategoryTicketId").ToTable("SET_CATGTICKET").PrimaryColumn("Id");
            
        }
    }
}