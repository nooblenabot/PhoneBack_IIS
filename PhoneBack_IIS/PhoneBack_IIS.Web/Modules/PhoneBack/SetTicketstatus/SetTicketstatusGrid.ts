
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class SetTicketstatusGrid extends Serenity.EntityGrid<SetTicketstatusRow, any> {
        protected getColumnsKey() { return 'PhoneBack.SetTicketstatus'; }
        protected getDialogType() { return SetTicketstatusDialog; }
        protected getIdProperty() { return SetTicketstatusRow.idProperty; }
        protected getLocalTextPrefix() { return SetTicketstatusRow.localTextPrefix; }
        protected getService() { return SetTicketstatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}