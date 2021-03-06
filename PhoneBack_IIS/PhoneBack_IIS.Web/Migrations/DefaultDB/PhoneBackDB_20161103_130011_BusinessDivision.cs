﻿using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace PhoneBack_IIS.Migrations.PhoneBackDB
{

    [Migration(20161103130011)]
    public class PhoneBackDB_20161103_130011_Initial : AutoReversingMigration
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
                .Create.Table("SET_BUSSDIV")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_BUSSDIV")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_BUSSDIV", "Id");

            Insert.IntoTable("SET_BUSSDIV").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Hotline"
            });

            Insert.IntoTable("SET_BUSSDIV").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Sales Department"
            });

            Insert.IntoTable("SET_BUSSDIV").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Direction Department"
            });

            Insert.IntoTable("SET_BUSSDIV").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Account Department"
            });

            Action<ICreateTableWithColumnSyntax> addLocalizationColumns = expr => expr
                .WithColumn("BuissDiviId").AsInt16().NotNullable()
                .WithColumn("LanguageId").AsInt16().NotNullable()
                .WithColumn("Caption").AsString(50).Nullable()
               ;

            addLocalizationColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_BUSSDIVLang")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addLocalizationColumns(IfDatabase("Oracle")
                .Create.Table("SET_BUSSDIVLang")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_BUSSDIVLang", "Id");

            Create.ForeignKey("FK_DIVSTATUS_LANGUAGE").FromTable("SET_BUSSDIVLang").ForeignColumn("BuissDiviId").ToTable("SET_BUSSDIV").PrimaryColumn("Id");

            Insert.IntoTable("SET_BUSSDIVLang").Row(new
            {
                BuissDiviId = 1,
                LanguageId = 1,
                Caption = "Hotline"
            });

            Insert.IntoTable("SET_BUSSDIVLang").Row(new
            {
                BuissDiviId = 2,
                LanguageId = 1,
                Caption = "Sales Department"
            });

            Insert.IntoTable("SET_BUSSDIVLang").Row(new
            {
                BuissDiviId = 3,
                LanguageId = 1,
                Caption = "Direction Department"
            });

            Insert.IntoTable("SET_BUSSDIVLang").Row(new
            {
                BuissDiviId = 4,
                LanguageId = 1,
                Caption = "Account Department"
            });

            Insert.IntoTable("SET_BUSSDIVLang").Row(new
            {
                BuissDiviId = 1,
                LanguageId = 2,
                Caption = "Service Client"
            });

            Insert.IntoTable("SET_BUSSDIVLang").Row(new
            {
                BuissDiviId = 2,
                LanguageId = 2,
                Caption = "Service Commercial"
            });

            Insert.IntoTable("SET_BUSSDIVLang").Row(new
            {
                BuissDiviId = 3,
                LanguageId = 2,
                Caption = "Direction"
            });

            Insert.IntoTable("SET_BUSSDIVLang").Row(new
            {
                BuissDiviId = 4,
                LanguageId = 2,
                Caption = "Service Comptable"
            });

        }
    }
}