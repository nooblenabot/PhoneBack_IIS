using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103130036)]
    public class PhoneBackDB_20161103_130036_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("IsMorale").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("IsArchive").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                //.WithColumn("ConsumerNumber").AsString(80).Nullable()
                .WithColumn("CorporateName").AsString(100).Nullable()
                .WithColumn("ConsumerName").AsString(140).Nullable()
                .WithColumn("ConsumerStatus").AsInt16().Nullable()
                .WithColumn("AlertStatusConsumer").AsString(200).Nullable()
                .WithColumn("Adress_1").AsString(50).Nullable()
                .WithColumn("Adress_2").AsString(50).Nullable()
                .WithColumn("City").AsInt64().Nullable()
                .WithColumn("Country").AsInt16().Nullable()
                .WithColumn("Cedex").AsString(50).Nullable()
                .WithColumn("Phone").AsString(20).Nullable()
                .WithColumn("GSM").AsString(20).Nullable()
                .WithColumn("Email1").AsString(80).Nullable()
                .WithColumn("Caption").AsString(500).Nullable()
                .WithColumn("InactiveDate").AsDateTime().Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("CONSUMER")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("CONSUMER")
                .WithColumn("Id").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "CONSUMER", "Id");

            Create.ForeignKey("FK_CONSUMER_STATUS").FromTable("CONSUMER").ForeignColumn("ConsumerStatus").ToTable("SET_CONSUMERSTATUS").PrimaryColumn("Id");
            Create.ForeignKey("FK_CONSUMER_CITY").FromTable("CONSUMER").ForeignColumn("City").ToTable("SET_CITY").PrimaryColumn("Id");
            Create.ForeignKey("FK_CONSUMER_COUNTRY").FromTable("CONSUMER").ForeignColumn("Country").ToTable("SET_COUNTRY").PrimaryColumn("Id");
        }
    }
}