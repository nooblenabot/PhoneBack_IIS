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
        CityCaption?: string;
        City1?: string;
        CityPostCode?: string;
        CityCountry?: number;
        CountryNameFrFr?: string;
    }

    export namespace SetMycompanyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PhoneBack.SetMycompany';
        export const lookupKey = 'PhoneBack.Mycompany';

        export function getLookup(): Q.Lookup<SetMycompanyRow> {
            return Q.getLookup<SetMycompanyRow>('PhoneBack.Mycompany');
        }

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
            export declare const CityCaption: string;
            export declare const City1: string;
            export declare const CityPostCode: string;
            export declare const CityCountry: string;
            export declare const CountryNameFrFr: string;
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
            'CityCaption', 
            'City1', 
            'CityPostCode', 
            'CityCountry', 
            'CountryNameFrFr'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

