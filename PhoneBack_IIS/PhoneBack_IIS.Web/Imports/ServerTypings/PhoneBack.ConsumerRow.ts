namespace PhoneBack_IIS.PhoneBack {
    export interface ConsumerRow {
        Id?: number;
        IsMorale?: boolean;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CorporateName?: string;
        ConsumerName?: string;
        ConsumerStatus?: number;
        AlertStatusConsumer?: string;
        Adress1?: string;
        Adress2?: string;
        City?: number;
        Country?: number;
        Cedex?: string;
        Phone?: string;
        Gsm?: string;
        Email1?: string;
        Caption?: string;
        InactiveDate?: string;
        ArchiveDate?: string;
        ConsumerStatusDefaultValue?: boolean;
        ConsumerStatusIsActive?: boolean;
        ConsumerStatusInsertDate?: string;
        ConsumerStatusInsertUserId?: number;
        ConsumerStatusUpdateDate?: string;
        ConsumerStatusUpdateUserId?: number;
        ConsumerStatusCaption?: string;
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

    export namespace ConsumerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CorporateName';
        export const localTextPrefix = 'PhoneBack.Consumer';

        export namespace Fields {
            export declare const Id: string;
            export declare const IsMorale: string;
            export declare const IsActive: string;
            export declare const IsArchive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const CorporateName: string;
            export declare const ConsumerName: string;
            export declare const ConsumerStatus: string;
            export declare const AlertStatusConsumer: string;
            export declare const Adress1: string;
            export declare const Adress2: string;
            export declare const City: string;
            export declare const Country: string;
            export declare const Cedex: string;
            export declare const Phone: string;
            export declare const Gsm: string;
            export declare const Email1: string;
            export declare const Caption: string;
            export declare const InactiveDate: string;
            export declare const ArchiveDate: string;
            export declare const ConsumerStatusDefaultValue: string;
            export declare const ConsumerStatusIsActive: string;
            export declare const ConsumerStatusInsertDate: string;
            export declare const ConsumerStatusInsertUserId: string;
            export declare const ConsumerStatusUpdateDate: string;
            export declare const ConsumerStatusUpdateUserId: string;
            export declare const ConsumerStatusCaption: string;
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
            'IsMorale', 
            'IsActive', 
            'IsArchive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'CorporateName', 
            'ConsumerName', 
            'ConsumerStatus', 
            'AlertStatusConsumer', 
            'Adress1', 
            'Adress2', 
            'City', 
            'Country', 
            'Cedex', 
            'Phone', 
            'Gsm', 
            'Email1', 
            'Caption', 
            'InactiveDate', 
            'ArchiveDate', 
            'ConsumerStatusDefaultValue', 
            'ConsumerStatusIsActive', 
            'ConsumerStatusInsertDate', 
            'ConsumerStatusInsertUserId', 
            'ConsumerStatusUpdateDate', 
            'ConsumerStatusUpdateUserId', 
            'ConsumerStatusCaption', 
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

