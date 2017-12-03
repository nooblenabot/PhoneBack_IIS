namespace PhoneBack_IIS.PhoneBack {
    export class SetMycompanyForm extends Serenity.PrefixedContext {
        static formKey = 'PhoneBack.SetMycompany';

    }

    export interface SetMycompanyForm {
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

    [['IsActive', () => Serenity.BooleanEditor], ['IsArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Name', () => Serenity.StringEditor], ['Phone', () => Serenity.StringEditor], ['Gsm', () => Serenity.StringEditor], ['Email1', () => Serenity.StringEditor], ['Adress', () => Serenity.StringEditor], ['City', () => Serenity.LookupEditor], ['Country', () => Serenity.LookupEditor], ['Cedex', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(SetMycompanyForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

