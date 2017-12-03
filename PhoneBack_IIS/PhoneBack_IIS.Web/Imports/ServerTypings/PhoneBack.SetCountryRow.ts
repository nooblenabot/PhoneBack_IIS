namespace PhoneBack_IIS.PhoneBack {
    export interface SetCountryRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        NameFrFr?: string;
        NameEnGb?: string;
        Alpha3?: string;
        Alpha2?: string;
        CodeUe?: number;
        IsOcode?: string;
    }

    export namespace SetCountryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'NameFrFr';
        export const localTextPrefix = 'PhoneBack.SetCountry';

        export namespace Fields {
            export declare const Id: string;
            export declare const DefaultValue: string;
            export declare const IsActive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const NameFrFr: string;
            export declare const NameEnGb: string;
            export declare const Alpha3: string;
            export declare const Alpha2: string;
            export declare const CodeUe: string;
            export declare const IsOcode: string;
        }

        [
            'Id', 
            'DefaultValue', 
            'IsActive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'NameFrFr', 
            'NameEnGb', 
            'Alpha3', 
            'Alpha2', 
            'CodeUe', 
            'IsOcode'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

