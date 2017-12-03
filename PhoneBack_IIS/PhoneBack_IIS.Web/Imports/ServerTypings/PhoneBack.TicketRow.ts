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
        IdentityConsumerIsActive?: boolean;
        IdentityConsumerIsArchive?: boolean;
        IdentityConsumerInsertDate?: string;
        IdentityConsumerInsertUserId?: number;
        IdentityConsumerUpdateDate?: string;
        IdentityConsumerUpdateUserId?: number;
        IdentityConsumerSurname?: string;
        IdentityConsumerName?: string;
        IdentityConsumerMaidenName?: string;
        IdentityConsumerCorporateId?: number;
        IdentityConsumerSexe?: number;
        IdentityConsumerPhone?: string;
        IdentityConsumerGsm?: string;
        IdentityConsumerEmail1?: string;
        IdentityConsumerCaption?: string;
        IdentityConsumerInactiveDate?: string;
        IdentityConsumerArchiveDate?: string;
        StatusDefaultValue?: boolean;
        StatusIsActive?: boolean;
        StatusInsertDate?: string;
        StatusInsertUserId?: number;
        StatusUpdateDate?: string;
        StatusUpdateUserId?: number;
        StatusCaption?: string;
        PriorityDefaultValue?: boolean;
        PriorityIsActive?: boolean;
        PriorityInsertDate?: string;
        PriorityInsertUserId?: number;
        PriorityUpdateDate?: string;
        PriorityUpdateUserId?: number;
        PriorityCaption?: string;
        PriorityColor?: string;
        CategoryDefaultValue?: boolean;
        CategoryIsActive?: boolean;
        CategoryInsertDate?: string;
        CategoryInsertUserId?: number;
        CategoryUpdateDate?: string;
        CategoryUpdateUserId?: number;
        CategoryCaption?: string;
        ToUserUsername?: string;
        ToUserDisplayName?: string;
        ToUserEmail?: string;
        ToUserSource?: string;
        ToUserPasswordHash?: string;
        ToUserPasswordSalt?: string;
        ToUserLastDirectoryUpdate?: string;
        ToUserUserImage?: string;
        ToUserInsertDate?: string;
        ToUserInsertUserId?: number;
        ToUserUpdateDate?: string;
        ToUserUpdateUserId?: number;
        ToUserIsActive?: number;
        ToUserMyCompanyId?: number;
        ToUserBusinessDivision?: number;
        ToUserPhone?: string;
        ToUserGsm?: string;
    }

    export namespace TicketRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Subject';
        export const localTextPrefix = 'PhoneBack.Ticket';

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
            export declare const IdentityConsumerIsActive: string;
            export declare const IdentityConsumerIsArchive: string;
            export declare const IdentityConsumerInsertDate: string;
            export declare const IdentityConsumerInsertUserId: string;
            export declare const IdentityConsumerUpdateDate: string;
            export declare const IdentityConsumerUpdateUserId: string;
            export declare const IdentityConsumerSurname: string;
            export declare const IdentityConsumerName: string;
            export declare const IdentityConsumerMaidenName: string;
            export declare const IdentityConsumerCorporateId: string;
            export declare const IdentityConsumerSexe: string;
            export declare const IdentityConsumerPhone: string;
            export declare const IdentityConsumerGsm: string;
            export declare const IdentityConsumerEmail1: string;
            export declare const IdentityConsumerCaption: string;
            export declare const IdentityConsumerInactiveDate: string;
            export declare const IdentityConsumerArchiveDate: string;
            export declare const StatusDefaultValue: string;
            export declare const StatusIsActive: string;
            export declare const StatusInsertDate: string;
            export declare const StatusInsertUserId: string;
            export declare const StatusUpdateDate: string;
            export declare const StatusUpdateUserId: string;
            export declare const StatusCaption: string;
            export declare const PriorityDefaultValue: string;
            export declare const PriorityIsActive: string;
            export declare const PriorityInsertDate: string;
            export declare const PriorityInsertUserId: string;
            export declare const PriorityUpdateDate: string;
            export declare const PriorityUpdateUserId: string;
            export declare const PriorityCaption: string;
            export declare const PriorityColor: string;
            export declare const CategoryDefaultValue: string;
            export declare const CategoryIsActive: string;
            export declare const CategoryInsertDate: string;
            export declare const CategoryInsertUserId: string;
            export declare const CategoryUpdateDate: string;
            export declare const CategoryUpdateUserId: string;
            export declare const CategoryCaption: string;
            export declare const ToUserUsername: string;
            export declare const ToUserDisplayName: string;
            export declare const ToUserEmail: string;
            export declare const ToUserSource: string;
            export declare const ToUserPasswordHash: string;
            export declare const ToUserPasswordSalt: string;
            export declare const ToUserLastDirectoryUpdate: string;
            export declare const ToUserUserImage: string;
            export declare const ToUserInsertDate: string;
            export declare const ToUserInsertUserId: string;
            export declare const ToUserUpdateDate: string;
            export declare const ToUserUpdateUserId: string;
            export declare const ToUserIsActive: string;
            export declare const ToUserMyCompanyId: string;
            export declare const ToUserBusinessDivision: string;
            export declare const ToUserPhone: string;
            export declare const ToUserGsm: string;
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
            'IdentityConsumerIsActive', 
            'IdentityConsumerIsArchive', 
            'IdentityConsumerInsertDate', 
            'IdentityConsumerInsertUserId', 
            'IdentityConsumerUpdateDate', 
            'IdentityConsumerUpdateUserId', 
            'IdentityConsumerSurname', 
            'IdentityConsumerName', 
            'IdentityConsumerMaidenName', 
            'IdentityConsumerCorporateId', 
            'IdentityConsumerSexe', 
            'IdentityConsumerPhone', 
            'IdentityConsumerGsm', 
            'IdentityConsumerEmail1', 
            'IdentityConsumerCaption', 
            'IdentityConsumerInactiveDate', 
            'IdentityConsumerArchiveDate', 
            'StatusDefaultValue', 
            'StatusIsActive', 
            'StatusInsertDate', 
            'StatusInsertUserId', 
            'StatusUpdateDate', 
            'StatusUpdateUserId', 
            'StatusCaption', 
            'PriorityDefaultValue', 
            'PriorityIsActive', 
            'PriorityInsertDate', 
            'PriorityInsertUserId', 
            'PriorityUpdateDate', 
            'PriorityUpdateUserId', 
            'PriorityCaption', 
            'PriorityColor', 
            'CategoryDefaultValue', 
            'CategoryIsActive', 
            'CategoryInsertDate', 
            'CategoryInsertUserId', 
            'CategoryUpdateDate', 
            'CategoryUpdateUserId', 
            'CategoryCaption', 
            'ToUserUsername', 
            'ToUserDisplayName', 
            'ToUserEmail', 
            'ToUserSource', 
            'ToUserPasswordHash', 
            'ToUserPasswordSalt', 
            'ToUserLastDirectoryUpdate', 
            'ToUserUserImage', 
            'ToUserInsertDate', 
            'ToUserInsertUserId', 
            'ToUserUpdateDate', 
            'ToUserUpdateUserId', 
            'ToUserIsActive', 
            'ToUserMyCompanyId', 
            'ToUserBusinessDivision', 
            'ToUserPhone', 
            'ToUserGsm'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

