/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace PhoneBack_IIS.Administration {
}
declare namespace PhoneBack_IIS.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
}
declare namespace PhoneBack_IIS.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace PhoneBack_IIS.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace PhoneBack_IIS.Administration {
}
declare namespace PhoneBack_IIS.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace PhoneBack_IIS.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace PhoneBack_IIS.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace PhoneBack_IIS.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace PhoneBack_IIS.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace PhoneBack_IIS.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace PhoneBack_IIS.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace PhoneBack_IIS.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace PhoneBack_IIS {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace PhoneBack_IIS {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace PhoneBack_IIS {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace PhoneBack_IIS {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace PhoneBack_IIS.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace PhoneBack_IIS.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace PhoneBack_IIS.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace PhoneBack_IIS.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace PhoneBack_IIS.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace PhoneBack_IIS.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace PhoneBack_IIS.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace PhoneBack_IIS.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace PhoneBack_IIS.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace PhoneBack_IIS.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class ConsumerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ConsumerForm {
        IsMorale: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        CorporateName: Serenity.StringEditor;
        ConsumerName: Serenity.StringEditor;
        ConsumerStatus: Serenity.LookupEditor;
        AlertStatusConsumer: Serenity.StringEditor;
        Adress1: Serenity.StringEditor;
        Adress2: Serenity.StringEditor;
        City: Serenity.LookupEditor;
        Country: Serenity.LookupEditor;
        Cedex: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        InactiveDate: Serenity.DateEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface ConsumerRow {
        Id?: number;
        IsMorale?: boolean;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CorporateName?: string;
        ConsumerName?: string;
        ConsumerStatus?: number;
        AlertStatusConsumer?: string;
        Adress1?: string;
        Adress2?: string;
        City?: number;
        Country?: number;
        Cedex?: string;
        Phone?: string;
        Gsm?: string;
        Email1?: string;
        Caption?: string;
        InactiveDate?: string;
        ArchiveDate?: string;
        ConsumerStatusCaption?: string;
        CityIsActive?: boolean;
        CityCaption?: string;
        City1?: string;
        CityPostCode?: string;
        CityCountry?: number;
        CountryNameFrFr?: string;
    }
    namespace ConsumerRow {
        const idProperty = "Id";
        const nameProperty = "CorporateName";
        const localTextPrefix = "PhoneBack.Consumer";
        const lookupKey = "PhoneBack.Consumer";
        function getLookup(): Q.Lookup<ConsumerRow>;
        namespace Fields {
            const Id: string;
            const IsMorale: string;
            const IsActive: string;
            const IsArchive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const CorporateName: string;
            const ConsumerName: string;
            const ConsumerStatus: string;
            const AlertStatusConsumer: string;
            const Adress1: string;
            const Adress2: string;
            const City: string;
            const Country: string;
            const Cedex: string;
            const Phone: string;
            const Gsm: string;
            const Email1: string;
            const Caption: string;
            const InactiveDate: string;
            const ArchiveDate: string;
            const ConsumerStatusCaption: string;
            const CityIsActive: string;
            const CityCaption: string;
            const City1: string;
            const CityPostCode: string;
            const CityCountry: string;
            const CountryNameFrFr: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace ConsumerService {
        const baseUrl = "PhoneBack/Consumer";
        function Create(request: Serenity.SaveRequest<ConsumerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ConsumerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsumerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsumerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class PersonForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PersonForm {
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Surname: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        MaidenName: Serenity.StringEditor;
        CorporateId: Serenity.LookupEditor;
        Sexe: Serenity.IntegerEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        InactiveDate: Serenity.DateEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface PersonRow {
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
    namespace PersonRow {
        const idProperty = "Id";
        const nameProperty = "Surname";
        const localTextPrefix = "PhoneBack.Person";
        const lookupKey = "PhoneBack.Person";
        function getLookup(): Q.Lookup<PersonRow>;
        namespace Fields {
            const Id: string;
            const IsActive: string;
            const IsArchive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Surname: string;
            const Name: string;
            const MaidenName: string;
            const CorporateId: string;
            const Sexe: string;
            const Phone: string;
            const Gsm: string;
            const Email1: string;
            const Caption: string;
            const InactiveDate: string;
            const ArchiveDate: string;
            const CorporateIsMorale: string;
            const CorporateIsActive: string;
            const CorporateIsArchive: string;
            const CorporateInsertDate: string;
            const CorporateInsertUserId: string;
            const CorporateUpdateDate: string;
            const CorporateUpdateUserId: string;
            const CorporateCorporateName: string;
            const CorporateConsumerName: string;
            const CorporateConsumerStatus: string;
            const CorporateAlertStatusConsumer: string;
            const CorporateAdress1: string;
            const CorporateAdress2: string;
            const CorporateCity: string;
            const CorporateCountry: string;
            const CorporateCedex: string;
            const CorporatePhone: string;
            const CorporateGsm: string;
            const CorporateEmail1: string;
            const CorporateCaption: string;
            const CorporateInactiveDate: string;
            const CorporateArchiveDate: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace PersonService {
        const baseUrl = "PhoneBack/Person";
        function Create(request: Serenity.SaveRequest<PersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetBussdivForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetBussdivForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface SetBussdivRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
    }
    namespace SetBussdivRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "PhoneBack.SetBussdiv";
        const lookupKey = "PhoneBack.SetBussdiv";
        function getLookup(): Q.Lookup<SetBussdivRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Caption: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace SetBussdivService {
        const baseUrl = "PhoneBack/SetBussdiv";
        function Create(request: Serenity.SaveRequest<SetBussdivRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetBussdivRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetBussdivRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetBussdivRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetCatgticketForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetCatgticketForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface SetCatgticketRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
    }
    namespace SetCatgticketRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "PhoneBack.SetCatgticket";
        const lookupKey = "PhoneBack.SetCatgticket";
        function getLookup(): Q.Lookup<SetCatgticketRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Caption: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace SetCatgticketService {
        const baseUrl = "PhoneBack/SetCatgticket";
        function Create(request: Serenity.SaveRequest<SetCatgticketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetCatgticketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetCatgticketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetCatgticketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetCityForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetCityForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        FrCodeInsee: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        City: Serenity.StringEditor;
        PostCode: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface SetCityRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        FrCodeInsee?: string;
        Caption?: string;
        City?: string;
        PostCode?: string;
        Country?: number;
        CountryNameFrFr?: string;
    }
    namespace SetCityRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "PhoneBack.SetCity";
        const lookupKey = "PhoneBack.City";
        function getLookup(): Q.Lookup<SetCityRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const FrCodeInsee: string;
            const Caption: string;
            const City: string;
            const PostCode: string;
            const Country: string;
            const CountryNameFrFr: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace SetCityService {
        const baseUrl = "PhoneBack/SetCity";
        function Create(request: Serenity.SaveRequest<SetCityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetCityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetCityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetCityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetConsumerstatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetConsumerstatusForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface SetConsumerstatusRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
    }
    namespace SetConsumerstatusRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "PhoneBack.SetConsumerstatus";
        const lookupKey = "PhoneBack.SetConsumerstatus";
        function getLookup(): Q.Lookup<SetConsumerstatusRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Caption: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace SetConsumerstatusService {
        const baseUrl = "PhoneBack/SetConsumerstatus";
        function Create(request: Serenity.SaveRequest<SetConsumerstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetConsumerstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetConsumerstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetConsumerstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetCountryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetCountryForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        NameFrFr: Serenity.StringEditor;
        NameEnGb: Serenity.StringEditor;
        Alpha3: Serenity.StringEditor;
        Alpha2: Serenity.StringEditor;
        CodeUe: Serenity.IntegerEditor;
        IsOcode: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface SetCountryRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        NameFrFr?: string;
        NameEnGb?: string;
        Alpha3?: string;
        Alpha2?: string;
        CodeUe?: number;
        IsOcode?: string;
    }
    namespace SetCountryRow {
        const idProperty = "Id";
        const nameProperty = "NameFrFr";
        const localTextPrefix = "PhoneBack.SetCountry";
        const lookupKey = "PhoneBack.Country";
        function getLookup(): Q.Lookup<SetCountryRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const NameFrFr: string;
            const NameEnGb: string;
            const Alpha3: string;
            const Alpha2: string;
            const CodeUe: string;
            const IsOcode: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace SetCountryService {
        const baseUrl = "PhoneBack/SetCountry";
        function Create(request: Serenity.SaveRequest<SetCountryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetCountryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetCountryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetCountryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetMycompanyForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetMycompanyForm {
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Adress: Serenity.StringEditor;
        City: Serenity.LookupEditor;
        Country: Serenity.LookupEditor;
        Cedex: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface SetMycompanyRow {
        Id?: number;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Name?: string;
        Phone?: string;
        Gsm?: string;
        Email1?: string;
        Adress?: string;
        City?: number;
        Country?: number;
        Cedex?: string;
        ArchiveDate?: string;
        CityCaption?: string;
        City1?: string;
        CityPostCode?: string;
        CityCountry?: number;
        CountryNameFrFr?: string;
    }
    namespace SetMycompanyRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "PhoneBack.SetMycompany";
        const lookupKey = "PhoneBack.Mycompany";
        function getLookup(): Q.Lookup<SetMycompanyRow>;
        namespace Fields {
            const Id: string;
            const IsActive: string;
            const IsArchive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Name: string;
            const Phone: string;
            const Gsm: string;
            const Email1: string;
            const Adress: string;
            const City: string;
            const Country: string;
            const Cedex: string;
            const ArchiveDate: string;
            const CityCaption: string;
            const City1: string;
            const CityPostCode: string;
            const CityCountry: string;
            const CountryNameFrFr: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace SetMycompanyService {
        const baseUrl = "PhoneBack/SetMycompany";
        function Create(request: Serenity.SaveRequest<SetMycompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetMycompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetMycompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetMycompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetPriorityticketForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetPriorityticketForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
        Color: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface SetPriorityticketRow {
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
    namespace SetPriorityticketRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "PhoneBack.SetPriorityticket";
        const lookupKey = "PhoneBack.SetPriorityticket";
        function getLookup(): Q.Lookup<SetPriorityticketRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Caption: string;
            const Color: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace SetPriorityticketService {
        const baseUrl = "PhoneBack/SetPriorityticket";
        function Create(request: Serenity.SaveRequest<SetPriorityticketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetPriorityticketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetPriorityticketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetPriorityticketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetTicketstatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetTicketstatusForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface SetTicketstatusRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
    }
    namespace SetTicketstatusRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "PhoneBack.SetTicketstatus";
        const lookupKey = "PhoneBack.SetTicketstatus";
        function getLookup(): Q.Lookup<SetTicketstatusRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Caption: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace SetTicketstatusService {
        const baseUrl = "PhoneBack/SetTicketstatus";
        function Create(request: Serenity.SaveRequest<SetTicketstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetTicketstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetTicketstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetTicketstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SettSoftwareForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SettSoftwareForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Setting: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface SettSoftwareRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Setting?: string;
        Value?: string;
        Caption?: string;
    }
    namespace SettSoftwareRow {
        const idProperty = "Id";
        const nameProperty = "Setting";
        const localTextPrefix = "PhoneBack.SettSoftware";
        const lookupKey = "PhoneBack.SettSoftware";
        function getLookup(): Q.Lookup<SettSoftwareRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Setting: string;
            const Value: string;
            const Caption: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace SettSoftwareService {
        const baseUrl = "PhoneBack/SettSoftware";
        function Create(request: Serenity.SaveRequest<SettSoftwareRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SettSoftwareRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SettSoftwareRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SettSoftwareRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class TicketCommentForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TicketCommentForm {
        TicketId: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUserId: Serenity.IntegerEditor;
        IsPublic: Serenity.BooleanEditor;
        Comment: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface TicketCommentRow {
        Id?: number;
        TicketId?: number;
        CreateDate?: string;
        CreateUserId?: number;
        IsPublic?: boolean;
        Comment?: string;
    }
    namespace TicketCommentRow {
        const idProperty = "Id";
        const nameProperty = "Comment";
        const localTextPrefix = "PhoneBack.TicketComment";
        const lookupKey = "PhoneBack.TicketComment";
        function getLookup(): Q.Lookup<TicketCommentRow>;
        namespace Fields {
            const Id: string;
            const TicketId: string;
            const CreateDate: string;
            const CreateUserId: string;
            const IsPublic: string;
            const Comment: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace TicketCommentService {
        const baseUrl = "PhoneBack/TicketComment";
        function Create(request: Serenity.SaveRequest<TicketCommentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TicketCommentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TicketCommentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TicketCommentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class TicketForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TicketForm {
        IdentityConsumer: Serenity.LookupEditor;
        CreateDate: Serenity.DateEditor;
        CreateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        CloseDate: Serenity.DateEditor;
        CloseUserId: Serenity.IntegerEditor;
        Status: Serenity.LookupEditor;
        Priority: Serenity.LookupEditor;
        Category: Serenity.LookupEditor;
        ToUserId: Serenity.IntegerEditor;
        Subject: Serenity.StringEditor;
        Object: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface TicketRow {
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
    namespace TicketRow {
        const idProperty = "Id";
        const nameProperty = "Subject";
        const localTextPrefix = "PhoneBack.Ticket";
        const lookupKey = "PhoneBack.Ticket";
        function getLookup(): Q.Lookup<TicketRow>;
        namespace Fields {
            const Id: string;
            const IdentityConsumer: string;
            const CreateDate: string;
            const CreateUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const CloseDate: string;
            const CloseUserId: string;
            const Status: string;
            const Priority: string;
            const Category: string;
            const ToUserId: string;
            const Subject: string;
            const Object: string;
            const IdentityConsumerSurname: string;
            const IdentityConsumerName: string;
            const IdentityConsumerMaidenName: string;
            const IdentityConsumerCorporateId: string;
            const IdentityConsumerSexe: string;
            const IdentityConsumerPhone: string;
            const IdentityConsumerGsm: string;
            const IdentityConsumerEmail1: string;
            const IdentityConsumerCaption: string;
            const StatusCaption: string;
            const PriorityCaption: string;
            const PriorityColor: string;
            const CategoryCaption: string;
            const ToUserUsername: string;
            const ToUserDisplayName: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace TicketService {
        const baseUrl = "PhoneBack/Ticket";
        function Create(request: Serenity.SaveRequest<TicketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TicketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TicketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TicketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
}
declare namespace PhoneBack_IIS.PhoneBack {
    class UsersForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UsersForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        PasswordHash: Serenity.StringEditor;
        PasswordSalt: Serenity.StringEditor;
        LastDirectoryUpdate: Serenity.DateEditor;
        UserImage: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
        MyCompanyId: Serenity.LookupEditor;
        BusinessDivision: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    interface UsersRow {
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
    namespace UsersRow {
        const idProperty = "UserId";
        const nameProperty = "Username";
        const localTextPrefix = "PhoneBack.Users";
        namespace Fields {
            const UserId: string;
            const Username: string;
            const DisplayName: string;
            const Email: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const LastDirectoryUpdate: string;
            const UserImage: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const IsActive: string;
            const MyCompanyId: string;
            const BusinessDivision: string;
            const Phone: string;
            const Gsm: string;
            const MyCompanyIsActive: string;
            const MyCompanyIsArchive: string;
            const MyCompanyInsertDate: string;
            const MyCompanyInsertUserId: string;
            const MyCompanyUpdateDate: string;
            const MyCompanyUpdateUserId: string;
            const MyCompanyName: string;
            const MyCompanyPhone: string;
            const MyCompanyGsm: string;
            const MyCompanyEmail1: string;
            const MyCompanyAdress: string;
            const MyCompanyCity: string;
            const MyCompanyCountry: string;
            const MyCompanyCedex: string;
            const MyCompanyArchiveDate: string;
            const BusinessDivisionDefaultValue: string;
            const BusinessDivisionIsActive: string;
            const BusinessDivisionInsertDate: string;
            const BusinessDivisionInsertUserId: string;
            const BusinessDivisionUpdateDate: string;
            const BusinessDivisionUpdateUserId: string;
            const BusinessDivisionCaption: string;
        }
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    namespace UsersService {
        const baseUrl = "PhoneBack/Users";
        function Create(request: Serenity.SaveRequest<UsersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UsersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UsersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UsersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PhoneBack_IIS {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace PhoneBack_IIS.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace PhoneBack_IIS.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace PhoneBack_IIS.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace PhoneBack_IIS.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace PhoneBack_IIS.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace PhoneBack_IIS.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace PhoneBack_IIS.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace PhoneBack_IIS.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace PhoneBack_IIS.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace PhoneBack_IIS.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace PhoneBack_IIS.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace PhoneBack_IIS.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace PhoneBack_IIS.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace PhoneBack_IIS {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace PhoneBack_IIS.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace PhoneBack_IIS.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace PhoneBack_IIS.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace PhoneBack_IIS.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace PhoneBack_IIS.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace PhoneBack_IIS.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace PhoneBack_IIS.LanguageList {
    function getValue(): string[][];
}
declare namespace PhoneBack_IIS {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent();
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace PhoneBack_IIS.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace PhoneBack_IIS.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace PhoneBack_IIS.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace PhoneBack_IIS.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace PhoneBack_IIS.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace PhoneBack_IIS.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace PhoneBack_IIS.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace PhoneBack_IIS.ScriptInitialization {
}
declare namespace PhoneBack_IIS.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace PhoneBack_IIS.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class ConsumerDialog extends Serenity.EntityDialog<ConsumerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ConsumerForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class ConsumerGrid extends Serenity.EntityGrid<ConsumerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsumerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class PersonDialog extends Serenity.EntityDialog<PersonRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PersonForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class PersonGrid extends Serenity.EntityGrid<PersonRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PersonDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetBussdivDialog extends Serenity.EntityDialog<SetBussdivRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetBussdivForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetBussdivGrid extends Serenity.EntityGrid<SetBussdivRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetBussdivDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetCatgticketDialog extends Serenity.EntityDialog<SetCatgticketRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetCatgticketForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetCatgticketGrid extends Serenity.EntityGrid<SetCatgticketRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetCatgticketDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetCityDialog extends Serenity.EntityDialog<SetCityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetCityForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetCityGrid extends Serenity.EntityGrid<SetCityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetCityDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetConsumerstatusDialog extends Serenity.EntityDialog<SetConsumerstatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetConsumerstatusForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetConsumerstatusGrid extends Serenity.EntityGrid<SetConsumerstatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetConsumerstatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetCountryDialog extends Serenity.EntityDialog<SetCountryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetCountryForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetCountryGrid extends Serenity.EntityGrid<SetCountryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetCountryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetMycompanyDialog extends Serenity.EntityDialog<SetMycompanyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetMycompanyForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetMycompanyGrid extends Serenity.EntityGrid<SetMycompanyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetMycompanyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetPriorityticketDialog extends Serenity.EntityDialog<SetPriorityticketRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetPriorityticketForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetPriorityticketGrid extends Serenity.EntityGrid<SetPriorityticketRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetPriorityticketDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetTicketstatusDialog extends Serenity.EntityDialog<SetTicketstatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetTicketstatusForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SetTicketstatusGrid extends Serenity.EntityGrid<SetTicketstatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetTicketstatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SettSoftwareDialog extends Serenity.EntityDialog<SettSoftwareRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SettSoftwareForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class SettSoftwareGrid extends Serenity.EntityGrid<SettSoftwareRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SettSoftwareDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class TicketDialog extends Serenity.EntityDialog<TicketRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TicketForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class TicketGrid extends Serenity.EntityGrid<TicketRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class TicketCommentDialog extends Serenity.EntityDialog<TicketCommentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TicketCommentForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class TicketCommentGrid extends Serenity.EntityGrid<TicketCommentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketCommentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class UsersDialog extends Serenity.EntityDialog<UsersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UsersForm;
    }
}
declare namespace PhoneBack_IIS.PhoneBack {
    class UsersGrid extends Serenity.EntityGrid<UsersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UsersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
