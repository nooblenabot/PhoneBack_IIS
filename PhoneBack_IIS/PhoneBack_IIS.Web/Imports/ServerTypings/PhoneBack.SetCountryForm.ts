namespace PhoneBack_IIS.PhoneBack {
    export class SetCountryForm extends Serenity.PrefixedContext {
        static formKey = 'PhoneBack.SetCountry';

    }

    export interface SetCountryForm {
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

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['NameFrFr', () => Serenity.StringEditor], ['NameEnGb', () => Serenity.StringEditor], ['Alpha3', () => Serenity.StringEditor], ['Alpha2', () => Serenity.StringEditor], ['CodeUe', () => Serenity.IntegerEditor], ['IsOcode', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SetCountryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

