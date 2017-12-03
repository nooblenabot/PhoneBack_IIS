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
    }

    export namespace SettSoftwareRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Setting';
        export const localTextPrefix = 'PhoneBack.SettSoftware';

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
            'Caption'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

