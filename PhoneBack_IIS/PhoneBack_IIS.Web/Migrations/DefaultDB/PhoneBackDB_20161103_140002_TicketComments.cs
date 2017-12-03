using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103140002)]
    public class PhoneBackDB_20161103_140002_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("TicketId").AsInt64().NotNullable()
                .WithColumn("CreateDate").AsDateTime().NotNullable()
                .WithColumn("CreateUserId").AsInt32().NotNullable()
                .WithColumn("IsPublic").AsBoolean().Nullable()
                .WithColumn("Comment").AsString(2000).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("TICKET_COMMENT")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("TICKET_COMMENT")
                .WithColumn("Id").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "TICKET_COMMENT", "Id");

            Create.ForeignKey("FK_TICKET_COMMENT").FromTable("TICKET_COMMENT").ForeignColumn("TicketId").ToTable("TICKET").PrimaryColumn("Id");

        }
    }
}