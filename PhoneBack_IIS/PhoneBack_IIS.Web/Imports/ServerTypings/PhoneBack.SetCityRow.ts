﻿namespace PhoneBack_IIS.PhoneBack {
    export interface SetCityRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        FrCodeInsee?: string;
        Caption?: string;
        City?: string;
        PostCode?: string;
        Country?: number;
        CountryDefaultValue?: boolean;
        CountryIsActive?: boolean;
        CountryInsertDate?: string;
        CountryInsertUserId?: number;
        CountryUpdateDate?: string;
        CountryUpdateUserId?: number;
        CountryNameFrFr?: string;
        CountryNameEnGb?: string;
        CountryAlpha3?: string;
        CountryAlpha2?: string;
        CountryCodeUe?: number;
        CountryIsOcode?: string;
    }

    export namespace SetCityRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FrCodeInsee';
        export const localTextPrefix = 'PhoneBack.SetCity';

        export namespace Fields {
            export declare const Id: string;
            export declare const DefaultValue: string;
            export declare const IsActive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const FrCodeInsee: string;
            export declare const Caption: string;
            export declare const City: string;
            export declare const PostCode: string;
            export declare const Country: string;
            export declare const CountryDefaultValue: string;
            export declare const CountryIsActive: string;
            export declare const CountryInsertDate: string;
            export declare const CountryInsertUserId: string;
            export declare const CountryUpdateDate: string;
            export declare const CountryUpdateUserId: string;
            export declare const CountryNameFrFr: string;
            export declare const CountryNameEnGb: string;
            export declare const CountryAlpha3: string;
            export declare const CountryAlpha2: string;
            export declare const CountryCodeUe: string;
            export declare const CountryIsOcode: string;
        }

        [
            'Id', 
            'DefaultValue', 
            'IsActive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'FrCodeInsee', 
            'Caption', 
            'City', 
            'PostCode', 
            'Country', 
            'CountryDefaultValue', 
            'CountryIsActive', 
            'CountryInsertDate', 
            'CountryInsertUserId', 
            'CountryUpdateDate', 
            'CountryUpdateUserId', 
            'CountryNameFrFr', 
            'CountryNameEnGb', 
            'CountryAlpha3', 
            'CountryAlpha2', 
            'CountryCodeUe', 
            'CountryIsOcode'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

