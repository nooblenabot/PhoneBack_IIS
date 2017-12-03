namespace PhoneBack_IIS.PhoneBack {
    export interface SetPriorityticketRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Color?: string;
    }

    export namespace SetPriorityticketRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'PhoneBack.SetPriorityticket';
        export const lookupKey = 'PhoneBack.SetPriorityticket';

        export function getLookup(): Q.Lookup<SetPriorityticketRow> {
            return Q.getLookup<SetPriorityticketRow>('PhoneBack.SetPriorityticket');
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
            export declare const Color: string;
        }

        [
            'Id', 
            'DefaultValue', 
            'IsActive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Caption', 
            'Color'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

