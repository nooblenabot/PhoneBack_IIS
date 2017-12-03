namespace PhoneBack_IIS.PhoneBack {
    export interface SetCatgticketRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
    }

    export namespace SetCatgticketRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'PhoneBack.SetCatgticket';
        export const lookupKey = 'PhoneBack.SetCatgticket';

        export function getLookup(): Q.Lookup<SetCatgticketRow> {
            return Q.getLookup<SetCatgticketRow>('PhoneBack.SetCatgticket');
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

