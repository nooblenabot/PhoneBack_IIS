namespace PhoneBack_IIS.PhoneBack {
    export interface TicketCommentRow {
        Id?: number;
        TicketId?: number;
        CreateDate?: string;
        CreateUserId?: number;
        IsPublic?: boolean;
        Comment?: string;
        TicketIdentityConsumer?: number;
        TicketCreateDate?: string;
        TicketCreateUserId?: number;
        TicketUpdateDate?: string;
        TicketUpdateUserId?: number;
        TicketCloseDate?: string;
        TicketCloseUserId?: number;
        TicketStatus?: number;
        TicketPriority?: number;
        TicketCategory?: number;
        TicketToUserId?: number;
        TicketSubject?: string;
        TicketObject?: string;
    }

    export namespace TicketCommentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Comment';
        export const localTextPrefix = 'PhoneBack.TicketComment';

        export namespace Fields {
            export declare const Id: string;
            export declare const TicketId: string;
            export declare const CreateDate: string;
            export declare const CreateUserId: string;
            export declare const IsPublic: string;
            export declare const Comment: string;
            export declare const TicketIdentityConsumer: string;
            export declare const TicketCreateDate: string;
            export declare const TicketCreateUserId: string;
            export declare const TicketUpdateDate: string;
            export declare const TicketUpdateUserId: string;
            export declare const TicketCloseDate: string;
            export declare const TicketCloseUserId: string;
            export declare const TicketStatus: string;
            export declare const TicketPriority: string;
            export declare const TicketCategory: string;
            export declare const TicketToUserId: string;
            export declare const TicketSubject: string;
            export declare const TicketObject: string;
        }

        [
            'Id', 
            'TicketId', 
            'CreateDate', 
            'CreateUserId', 
            'IsPublic', 
            'Comment', 
            'TicketIdentityConsumer', 
            'TicketCreateDate', 
            'TicketCreateUserId', 
            'TicketUpdateDate', 
            'TicketUpdateUserId', 
            'TicketCloseDate', 
            'TicketCloseUserId', 
            'TicketStatus', 
            'TicketPriority', 
            'TicketCategory', 
            'TicketToUserId', 
            'TicketSubject', 
            'TicketObject'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

