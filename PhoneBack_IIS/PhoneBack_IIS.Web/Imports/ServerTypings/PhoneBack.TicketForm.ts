namespace PhoneBack_IIS.PhoneBack {
    export class TicketForm extends Serenity.PrefixedContext {
        static formKey = 'PhoneBack.Ticket';

    }

    export interface TicketForm {
        IdentityConsumer: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        CloseDate: Serenity.DateEditor;
        CloseUserId: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        Priority: Serenity.IntegerEditor;
        Category: Serenity.IntegerEditor;
        ToUserId: Serenity.IntegerEditor;
        Subject: Serenity.StringEditor;
        Object: Serenity.StringEditor;
    }

    [['IdentityConsumer', () => Serenity.StringEditor], ['CreateDate', () => Serenity.DateEditor], ['CreateUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['CloseDate', () => Serenity.DateEditor], ['CloseUserId', () => Serenity.IntegerEditor], ['Status', () => Serenity.IntegerEditor], ['Priority', () => Serenity.IntegerEditor], ['Category', () => Serenity.IntegerEditor], ['ToUserId', () => Serenity.IntegerEditor], ['Subject', () => Serenity.StringEditor], ['Object', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TicketForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

