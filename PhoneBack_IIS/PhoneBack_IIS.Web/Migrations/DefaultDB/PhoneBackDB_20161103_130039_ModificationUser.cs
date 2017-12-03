using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103130039)]
    public class PhoneBackDB_20161103_130039_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Users")
                .AddColumn("MyCompanyId").AsInt16().Nullable()
                .AddColumn("BusinessDivision").AsInt16().Nullable()
                .AddColumn("Phone").AsString(20).Nullable()
                .AddColumn("GSM").AsString(20).Nullable()
                //                .WithColumn("Name").AsString(50).Nullable()
                //                .WithColumn("Surname").AsString(50).Nullable()
                //                .WithColumn("MaidenName").AsString(50).Nullable()
                ;

            Create.ForeignKey("FK_USER_COMPANY").FromTable("Users").ForeignColumn("MyCompanyId").ToTable("SET_MYCOMPANY").PrimaryColumn("Id");
            Create.ForeignKey("FK_USER_DIVISION").FromTable("Users").ForeignColumn("BusinessDivision").ToTable("SET_BUSSDIV").PrimaryColumn("Id");
        }
    }
}