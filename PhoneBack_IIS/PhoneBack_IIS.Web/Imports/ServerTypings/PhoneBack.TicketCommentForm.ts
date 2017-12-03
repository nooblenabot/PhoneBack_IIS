namespace PhoneBack_IIS.PhoneBack {
    export class TicketCommentForm extends Serenity.PrefixedContext {
        static formKey = 'PhoneBack.TicketComment';

    }

    export interface TicketCommentForm {
        TicketId: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        CreateUserId: Serenity.IntegerEditor;
        IsPublic: Serenity.BooleanEditor;
        Comment: Serenity.StringEditor;
    }

    [['TicketId', () => Serenity.StringEditor], ['CreateDate', () => Serenity.DateEditor], ['CreateUserId', () => Serenity.IntegerEditor], ['IsPublic', () => Serenity.BooleanEditor], ['Comment', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TicketCommentForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

