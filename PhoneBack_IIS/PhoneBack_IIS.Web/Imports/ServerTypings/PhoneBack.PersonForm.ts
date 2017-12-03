namespace PhoneBack_IIS.PhoneBack {
    export class PersonForm extends Serenity.PrefixedContext {
        static formKey = 'PhoneBack.Person';

    }

    export interface PersonForm {
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Surname: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        MaidenName: Serenity.StringEditor;
        CorporateId: Serenity.StringEditor;
        Sexe: Serenity.IntegerEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        InactiveDate: Serenity.DateEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['IsActive', () => Serenity.BooleanEditor], ['IsArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Surname', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor], ['MaidenName', () => Serenity.StringEditor], ['CorporateId', () => Serenity.StringEditor], ['Sexe', () => Serenity.IntegerEditor], ['Phone', () => Serenity.StringEditor], ['Gsm', () => Serenity.StringEditor], ['Email1', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['InactiveDate', () => Serenity.DateEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(PersonForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

