namespace PhoneBack_IIS.PhoneBack {
    export interface TicketCommentRow {
        Id?: number;
        TicketId?: number;
        CreateDate?: string;
        CreateUserId?: number;
        IsPublic?: boolean;
        Comment?: string;
    }

    export namespace TicketCommentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Comment';
        export const localTextPrefix = 'PhoneBack.TicketComment';
        export const lookupKey = 'PhoneBack.TicketComment';

        export function getLookup(): Q.Lookup<TicketCommentRow> {
            return Q.getLookup<TicketCommentRow>('PhoneBack.TicketComment');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const TicketId: string;
            export declare const CreateDate: string;
            export declare const CreateUserId: string;
            export declare const IsPublic: string;
            export declare const Comment: string;
        }

        [
            'Id', 
            'TicketId', 
            'CreateDate', 
            'CreateUserId', 
            'IsPublic', 
            'Comment'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

