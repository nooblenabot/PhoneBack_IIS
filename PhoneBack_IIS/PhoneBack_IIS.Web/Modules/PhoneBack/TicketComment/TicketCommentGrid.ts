
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class TicketCommentGrid extends Serenity.EntityGrid<TicketCommentRow, any> {
        protected getColumnsKey() { return 'PhoneBack.TicketComment'; }
        protected getDialogType() { return TicketCommentDialog; }
        protected getIdProperty() { return TicketCommentRow.idProperty; }
        protected getLocalTextPrefix() { return TicketCommentRow.localTextPrefix; }
        protected getService() { return TicketCommentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}