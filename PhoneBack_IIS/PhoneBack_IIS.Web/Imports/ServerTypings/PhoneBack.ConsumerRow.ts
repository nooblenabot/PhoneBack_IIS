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
        ConsumerStatusCaption?: string;
        CityIsActive?: boolean;
        CityCaption?: string;
        City1?: string;
        CityPostCode?: string;
        CityCountry?: number;
        CountryNameFrFr?: string;
    }

    export namespace ConsumerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CorporateName';
        export const localTextPrefix = 'PhoneBack.Consumer';
        export const lookupKey = 'PhoneBack.Consumer';

        export function getLookup(): Q.Lookup<ConsumerRow> {
            return Q.getLookup<ConsumerRow>('PhoneBack.Consumer');
        }

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
            export declare const ConsumerStatusCaption: string;
            export declare const CityIsActive: string;
            export declare const CityCaption: string;
            export declare const City1: string;
            export declare const CityPostCode: string;
            export declare const CityCountry: string;
            export declare const CountryNameFrFr: string;
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
            'ConsumerStatusCaption', 
            'CityIsActive', 
            'CityCaption', 
            'City1', 
            'CityPostCode', 
            'CityCountry', 
            'CountryNameFrFr'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

