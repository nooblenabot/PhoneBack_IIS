
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class TicketGrid extends Serenity.EntityGrid<TicketRow, any> {
        protected getColumnsKey() { return 'PhoneBack.Ticket'; }
        protected getDialogType() { return TicketDialog; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getService() { return TicketService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}