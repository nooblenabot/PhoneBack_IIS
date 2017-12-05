namespace PhoneBack_IIS.PhoneBack {
    export class SettSoftwareForm extends Serenity.PrefixedContext {
        static formKey = 'PhoneBack.SettSoftware';

    }

    export interface SettSoftwareForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Setting: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
    }

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['Setting', () => Serenity.StringEditor], ['Value', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SettSoftwareForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

