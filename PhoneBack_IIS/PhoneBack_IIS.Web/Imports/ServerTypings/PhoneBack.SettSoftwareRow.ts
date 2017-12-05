namespace PhoneBack_IIS.PhoneBack {
    export interface SettSoftwareRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Setting?: string;
        Value?: string;
        Caption?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
    }

    export namespace SettSoftwareRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Setting';
        export const localTextPrefix = 'PhoneBack.SettSoftware';
        export const lookupKey = 'PhoneBack.SettSoftware';

        export function getLookup(): Q.Lookup<SettSoftwareRow> {
            return Q.getLookup<SettSoftwareRow>('PhoneBack.SettSoftware');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const DefaultValue: string;
            export declare const IsActive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Setting: string;
            export declare const Value: string;
            export declare const Caption: string;
            export declare const InsertUsername: string;
            export declare const UpdateUsername: string;
        }

        [
            'Id', 
            'DefaultValue', 
            'IsActive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Setting', 
            'Value', 
            'Caption', 
            'InsertUsername', 
            'UpdateUsername'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

