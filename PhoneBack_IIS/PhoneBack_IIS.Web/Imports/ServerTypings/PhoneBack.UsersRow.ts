namespace PhoneBack_IIS.PhoneBack {
    export interface UsersRow {
        UserId?: number;
        Username?: string;
        DisplayName?: string;
        Email?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        LastDirectoryUpdate?: string;
        UserImage?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
        MyCompanyId?: number;
        BusinessDivision?: number;
        Phone?: string;
        Gsm?: string;
        MyCompanyIsActive?: boolean;
        MyCompanyIsArchive?: boolean;
        MyCompanyInsertDate?: string;
        MyCompanyInsertUserId?: number;
        MyCompanyUpdateDate?: string;
        MyCompanyUpdateUserId?: number;
        MyCompanyName?: string;
        MyCompanyPhone?: string;
        MyCompanyGsm?: string;
        MyCompanyEmail1?: string;
        MyCompanyAdress?: string;
        MyCompanyCity?: number;
        MyCompanyCountry?: number;
        MyCompanyCedex?: string;
        MyCompanyArchiveDate?: string;
        BusinessDivisionDefaultValue?: boolean;
        BusinessDivisionIsActive?: boolean;
        BusinessDivisionInsertDate?: string;
        BusinessDivisionInsertUserId?: number;
        BusinessDivisionUpdateDate?: string;
        BusinessDivisionUpdateUserId?: number;
        BusinessDivisionCaption?: string;
    }

    export namespace UsersRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'PhoneBack.Users';

        export namespace Fields {
            export declare const UserId: string;
            export declare const Username: string;
            export declare const DisplayName: string;
            export declare const Email: string;
            export declare const Source: string;
            export declare const PasswordHash: string;
            export declare const PasswordSalt: string;
            export declare const LastDirectoryUpdate: string;
            export declare const UserImage: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const IsActive: string;
            export declare const MyCompanyId: string;
            export declare const BusinessDivision: string;
            export declare const Phone: string;
            export declare const Gsm: string;
            export declare const MyCompanyIsActive: string;
            export declare const MyCompanyIsArchive: string;
            export declare const MyCompanyInsertDate: string;
            export declare const MyCompanyInsertUserId: string;
            export declare const MyCompanyUpdateDate: string;
            export declare const MyCompanyUpdateUserId: string;
            export declare const MyCompanyName: string;
            export declare const MyCompanyPhone: string;
            export declare const MyCompanyGsm: string;
            export declare const MyCompanyEmail1: string;
            export declare const MyCompanyAdress: string;
            export declare const MyCompanyCity: string;
            export declare const MyCompanyCountry: string;
            export declare const MyCompanyCedex: string;
            export declare const MyCompanyArchiveDate: string;
            export declare const BusinessDivisionDefaultValue: string;
            export declare const BusinessDivisionIsActive: string;
            export declare const BusinessDivisionInsertDate: string;
            export declare const BusinessDivisionInsertUserId: string;
            export declare const BusinessDivisionUpdateDate: string;
            export declare const BusinessDivisionUpdateUserId: string;
            export declare const BusinessDivisionCaption: string;
        }

        [
            'UserId', 
            'Username', 
            'DisplayName', 
            'Email', 
            'Source', 
            'PasswordHash', 
            'PasswordSalt', 
            'LastDirectoryUpdate', 
            'UserImage', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'IsActive', 
            'MyCompanyId', 
            'BusinessDivision', 
            'Phone', 
            'Gsm', 
            'MyCompanyIsActive', 
            'MyCompanyIsArchive', 
            'MyCompanyInsertDate', 
            'MyCompanyInsertUserId', 
            'MyCompanyUpdateDate', 
            'MyCompanyUpdateUserId', 
            'MyCompanyName', 
            'MyCompanyPhone', 
            'MyCompanyGsm', 
            'MyCompanyEmail1', 
            'MyCompanyAdress', 
            'MyCompanyCity', 
            'MyCompanyCountry', 
            'MyCompanyCedex', 
            'MyCompanyArchiveDate', 
            'BusinessDivisionDefaultValue', 
            'BusinessDivisionIsActive', 
            'BusinessDivisionInsertDate', 
            'BusinessDivisionInsertUserId', 
            'BusinessDivisionUpdateDate', 
            'BusinessDivisionUpdateUserId', 
            'BusinessDivisionCaption'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

