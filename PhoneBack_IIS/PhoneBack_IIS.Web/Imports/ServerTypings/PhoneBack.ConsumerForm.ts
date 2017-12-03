namespace PhoneBack_IIS.PhoneBack {
    export class ConsumerForm extends Serenity.PrefixedContext {
        static formKey = 'PhoneBack.Consumer';

    }

    export interface ConsumerForm {
        IsMorale: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        CorporateName: Serenity.StringEditor;
        ConsumerName: Serenity.StringEditor;
        ConsumerStatus: Serenity.IntegerEditor;
        AlertStatusConsumer: Serenity.StringEditor;
        Adress1: Serenity.StringEditor;
        Adress2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.IntegerEditor;
        Cedex: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        InactiveDate: Serenity.DateEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['IsMorale', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['IsArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['CorporateName', () => Serenity.StringEditor], ['ConsumerName', () => Serenity.StringEditor], ['ConsumerStatus', () => Serenity.IntegerEditor], ['AlertStatusConsumer', () => Serenity.StringEditor], ['Adress1', () => Serenity.StringEditor], ['Adress2', () => Serenity.StringEditor], ['City', () => Serenity.StringEditor], ['Country', () => Serenity.IntegerEditor], ['Cedex', () => Serenity.StringEditor], ['Phone', () => Serenity.StringEditor], ['Gsm', () => Serenity.StringEditor], ['Email1', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['InactiveDate', () => Serenity.DateEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ConsumerForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

