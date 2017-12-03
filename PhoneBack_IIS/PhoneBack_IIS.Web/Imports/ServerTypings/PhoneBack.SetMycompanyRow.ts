namespace PhoneBack_IIS.PhoneBack {
    export interface SetMycompanyRow {
        Id?: number;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Name?: string;
        Phone?: string;
        Gsm?: string;
        Email1?: string;
        Adress?: string;
        City?: number;
        Country?: number;
        Cedex?: string;
        ArchiveDate?: string;
        CityDefaultValue?: boolean;
        CityIsActive?: boolean;
        CityInsertDate?: string;
        CityInsertUserId?: number;
        CityUpdateDate?: string;
        CityUpdateUserId?: number;
        CityFrCodeInsee?: string;
        CityCaption?: string;
        City1?: string;
        CityPostCode?: string;
        CityCountry?: number;
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

    export namespace SetMycompanyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PhoneBack.SetMycompany';

        export namespace Fields {
            export declare const Id: string;
            export declare const IsActive: string;
            export declare const IsArchive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Name: string;
            export declare const Phone: string;
            export declare const Gsm: string;
            export declare const Email1: string;
            export declare const Adress: string;
            export declare const City: string;
            export declare const Country: string;
            export declare const Cedex: string;
            export declare const ArchiveDate: string;
            export declare const CityDefaultValue: string;
            export declare const CityIsActive: string;
            export declare const CityInsertDate: string;
            export declare const CityInsertUserId: string;
            export declare const CityUpdateDate: string;
            export declare const CityUpdateUserId: string;
            export declare const CityFrCodeInsee: string;
            export declare const CityCaption: string;
            export declare const City1: string;
            export declare const CityPostCode: string;
            export declare const CityCountry: string;
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
            'IsActive', 
            'IsArchive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Name', 
            'Phone', 
            'Gsm', 
            'Email1', 
            'Adress', 
            'City', 
            'Country', 
            'Cedex', 
            'ArchiveDate', 
            'CityDefaultValue', 
            'CityIsActive', 
            'CityInsertDate', 
            'CityInsertUserId', 
            'CityUpdateDate', 
            'CityUpdateUserId', 
            'CityFrCodeInsee', 
            'CityCaption', 
            'City1', 
            'CityPostCode', 
            'CityCountry', 
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

