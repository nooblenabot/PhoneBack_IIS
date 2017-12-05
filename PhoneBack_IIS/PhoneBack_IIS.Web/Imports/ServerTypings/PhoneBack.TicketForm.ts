namespace PhoneBack_IIS.PhoneBack {
    export class TicketForm extends Serenity.PrefixedContext {
        static formKey = 'PhoneBack.Ticket';

    }

    export interface TicketForm {
        CloseDate: Serenity.DateEditor;
        CloseUserId: Serenity.IntegerEditor;
        CreateDate: Serenity.DateEditor;
        CreateUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        IdentityConsumer: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        Priority: Serenity.LookupEditor;
        Category: Serenity.LookupEditor;
        ToUserId: Serenity.LookupEditor;
        Subject: Serenity.StringEditor;
        Object: Serenity.TextAreaEditor;
    }

    [['CloseDate', () => Serenity.DateEditor], ['CloseUserId', () => Serenity.IntegerEditor], ['CreateDate', () => Serenity.DateEditor], ['CreateUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['IdentityConsumer', () => Serenity.LookupEditor], ['Status', () => Serenity.LookupEditor], ['Priority', () => Serenity.LookupEditor], ['Category', () => Serenity.LookupEditor], ['ToUserId', () => Serenity.LookupEditor], ['Subject', () => Serenity.StringEditor], ['Object', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(TicketForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

