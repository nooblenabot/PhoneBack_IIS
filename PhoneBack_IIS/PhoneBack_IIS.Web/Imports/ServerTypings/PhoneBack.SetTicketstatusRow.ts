namespace PhoneBack_IIS.PhoneBack {
    export interface SetTicketstatusRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
    }

    export namespace SetTicketstatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'PhoneBack.SetTicketstatus';
        export const lookupKey = 'PhoneBack.SetTicketstatus';

        export function getLookup(): Q.Lookup<SetTicketstatusRow> {
            return Q.getLookup<SetTicketstatusRow>('PhoneBack.SetTicketstatus');
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

