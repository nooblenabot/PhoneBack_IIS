namespace PhoneBack_IIS.PhoneBack {
    export interface PersonRow {
        Id?: number;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Surname?: string;
        Name?: string;
        MaidenName?: string;
        CorporateId?: number;
        Sexe?: number;
        Phone?: string;
        Gsm?: string;
        Email1?: string;
        Caption?: string;
        InactiveDate?: string;
        ArchiveDate?: string;
        CorporateIsMorale?: boolean;
        CorporateIsActive?: boolean;
        CorporateIsArchive?: boolean;
        CorporateInsertDate?: string;
        CorporateInsertUserId?: number;
        CorporateUpdateDate?: string;
        CorporateUpdateUserId?: number;
        CorporateCorporateName?: string;
        CorporateConsumerName?: string;
        CorporateConsumerStatus?: number;
        CorporateAlertStatusConsumer?: string;
        CorporateAdress1?: string;
        CorporateAdress2?: string;
        CorporateCity?: number;
        CorporateCountry?: number;
        CorporateCedex?: string;
        CorporatePhone?: string;
        CorporateGsm?: string;
        CorporateEmail1?: string;
        CorporateCaption?: string;
        CorporateInactiveDate?: string;
        CorporateArchiveDate?: string;
    }

    export namespace PersonRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Surname';
        export const localTextPrefix = 'PhoneBack.Person';
        export const lookupKey = 'PhoneBack.Person';

        export function getLookup(): Q.Lookup<PersonRow> {
            return Q.getLookup<PersonRow>('PhoneBack.Person');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const IsActive: string;
            export declare const IsArchive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Surname: string;
            export declare const Name: string;
            export declare const MaidenName: string;
            export declare const CorporateId: string;
            export declare const Sexe: string;
            export declare const Phone: string;
            export declare const Gsm: string;
            export declare const Email1: string;
            export declare const Caption: string;
            export declare const InactiveDate: string;
            export declare const ArchiveDate: string;
            export declare const CorporateIsMorale: string;
            export declare const CorporateIsActive: string;
            export declare const CorporateIsArchive: string;
            export declare const CorporateInsertDate: string;
            export declare const CorporateInsertUserId: string;
            export declare const CorporateUpdateDate: string;
            export declare const CorporateUpdateUserId: string;
            export declare const CorporateCorporateName: string;
            export declare const CorporateConsumerName: string;
            export declare const CorporateConsumerStatus: string;
            export declare const CorporateAlertStatusConsumer: string;
            export declare const CorporateAdress1: string;
            export declare const CorporateAdress2: string;
            export declare const CorporateCity: string;
            export declare const CorporateCountry: string;
            export declare const CorporateCedex: string;
            export declare const CorporatePhone: string;
            export declare const CorporateGsm: string;
            export declare const CorporateEmail1: string;
            export declare const CorporateCaption: string;
            export declare const CorporateInactiveDate: string;
            export declare const CorporateArchiveDate: string;
        }

        [
            'Id', 
            'IsActive', 
            'IsArchive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Surname', 
            'Name', 
            'MaidenName', 
            'CorporateId', 
            'Sexe', 
            'Phone', 
            'Gsm', 
            'Email1', 
            'Caption', 
            'InactiveDate', 
            'ArchiveDate', 
            'CorporateIsMorale', 
            'CorporateIsActive', 
            'CorporateIsArchive', 
            'CorporateInsertDate', 
            'CorporateInsertUserId', 
            'CorporateUpdateDate', 
            'CorporateUpdateUserId', 
            'CorporateCorporateName', 
            'CorporateConsumerName', 
            'CorporateConsumerStatus', 
            'CorporateAlertStatusConsumer', 
            'CorporateAdress1', 
            'CorporateAdress2', 
            'CorporateCity', 
            'CorporateCountry', 
            'CorporateCedex', 
            'CorporatePhone', 
            'CorporateGsm', 
            'CorporateEmail1', 
            'CorporateCaption', 
            'CorporateInactiveDate', 
            'CorporateArchiveDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

