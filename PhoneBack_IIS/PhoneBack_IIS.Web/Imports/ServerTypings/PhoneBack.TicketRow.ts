namespace PhoneBack_IIS.PhoneBack {
    export interface TicketRow {
        Id?: number;
        IdentityConsumer?: number;
        CreateDate?: string;
        CreateUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CloseDate?: string;
        CloseUserId?: number;
        Status?: number;
        Priority?: number;
        Category?: number;
        ToUserId?: number;
        Subject?: string;
        Object?: string;
        IdentityConsumerSurname?: string;
        IdentityConsumerName?: string;
        IdentityConsumerMaidenName?: string;
        IdentityConsumerCorporateId?: number;
        IdentityConsumerSexe?: number;
        IdentityConsumerPhone?: string;
        IdentityConsumerGsm?: string;
        IdentityConsumerEmail1?: string;
        IdentityConsumerCaption?: string;
        StatusCaption?: string;
        PriorityCaption?: string;
        PriorityColor?: string;
        CategoryCaption?: string;
        ToUserUsername?: string;
        ToUserDisplayName?: string;
    }

    export namespace TicketRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Subject';
        export const localTextPrefix = 'PhoneBack.Ticket';
        export const lookupKey = 'PhoneBack.Ticket';

        export function getLookup(): Q.Lookup<TicketRow> {
            return Q.getLookup<TicketRow>('PhoneBack.Ticket');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const IdentityConsumer: string;
            export declare const CreateDate: string;
            export declare const CreateUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const CloseDate: string;
            export declare const CloseUserId: string;
            export declare const Status: string;
            export declare const Priority: string;
            export declare const Category: string;
            export declare const ToUserId: string;
            export declare const Subject: string;
            export declare const Object: string;
            export declare const IdentityConsumerSurname: string;
            export declare const IdentityConsumerName: string;
            export declare const IdentityConsumerMaidenName: string;
            export declare const IdentityConsumerCorporateId: string;
            export declare const IdentityConsumerSexe: string;
            export declare const IdentityConsumerPhone: string;
            export declare const IdentityConsumerGsm: string;
            export declare const IdentityConsumerEmail1: string;
            export declare const IdentityConsumerCaption: string;
            export declare const StatusCaption: string;
            export declare const PriorityCaption: string;
            export declare const PriorityColor: string;
            export declare const CategoryCaption: string;
            export declare const ToUserUsername: string;
            export declare const ToUserDisplayName: string;
        }

        [
            'Id', 
            'IdentityConsumer', 
            'CreateDate', 
            'CreateUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'CloseDate', 
            'CloseUserId', 
            'Status', 
            'Priority', 
            'Category', 
            'ToUserId', 
            'Subject', 
            'Object', 
            'IdentityConsumerSurname', 
            'IdentityConsumerName', 
            'IdentityConsumerMaidenName', 
            'IdentityConsumerCorporateId', 
            'IdentityConsumerSexe', 
            'IdentityConsumerPhone', 
            'IdentityConsumerGsm', 
            'IdentityConsumerEmail1', 
            'IdentityConsumerCaption', 
            'StatusCaption', 
            'PriorityCaption', 
            'PriorityColor', 
            'CategoryCaption', 
            'ToUserUsername', 
            'ToUserDisplayName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

