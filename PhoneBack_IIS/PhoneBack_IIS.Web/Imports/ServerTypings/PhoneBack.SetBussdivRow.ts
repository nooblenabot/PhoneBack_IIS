﻿namespace PhoneBack_IIS.PhoneBack {
    export interface SetBussdivRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
    }

    export namespace SetBussdivRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'PhoneBack.SetBussdiv';
        export const lookupKey = 'PhoneBack.SetBussdiv';

        export function getLookup(): Q.Lookup<SetBussdivRow> {
            return Q.getLookup<SetBussdivRow>('PhoneBack.SetBussdiv');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const DefaultValue: string;
            export declare const IsActive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
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
            'Caption'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

