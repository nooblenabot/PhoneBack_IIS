using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103140001)]
    public class PhoneBackDB_20161103_140001_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("IdentityConsumer").AsInt64().Nullable()
                .WithColumn("CreateDate").AsDateTime().NotNullable()
                .WithColumn("CreateUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("CloseDate").AsDateTime().Nullable()
                .WithColumn("CloseUserId").AsInt32().Nullable()
                .WithColumn("Status").AsInt16().Nullable()
                .WithColumn("Priority").AsInt16().Nullable()
                .WithColumn("Category").AsInt16().Nullable()
                .WithColumn("ToDepartmentId").AsInt16().Nullable()
                .WithColumn("ToUserId").AsInt32().Nullable()
                .WithColumn("Subject").AsString(100).Nullable()
                .WithColumn("Object").AsString(2000).Nullable()
                ;

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("TICKET")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("TICKET")
                .WithColumn("Id").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "TICKET", "Id");

            Create.ForeignKey("FK_TICKET_STATUS").FromTable("TICKET").ForeignColumn("Status").ToTable("SET_TICKETSTATUS").PrimaryColumn("Id");
            Create.ForeignKey("FK_TICKET_PRIORITY").FromTable("TICKET").ForeignColumn("Priority").ToTable("SET_PRIORITYTICKET").PrimaryColumn("Id");
            Create.ForeignKey("FK_TICKET_CATEGORY").FromTable("TICKET").ForeignColumn("Category").ToTable("SET_CATGTICKET").PrimaryColumn("Id");
            Create.ForeignKey("FK_TICKET_TOUSER").FromTable("TICKET").ForeignColumn("ToUserId").ToTable("Users").PrimaryColumn("UserId");
            Create.ForeignKey("FK_TICKET_CONSUMER").FromTable("TICKET").ForeignColumn("IdentityConsumer").ToTable("PERSON").PrimaryColumn("Id");
            Create.ForeignKey("FK_TICKET_DEPARTMENT").FromTable("TICKET").ForeignColumn("ToDepartmentId").ToTable("SET_BUSSDIV").PrimaryColumn("Id");
            

        }
    }
}