
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class SetPriorityticketGrid extends Serenity.EntityGrid<SetPriorityticketRow, any> {
        protected getColumnsKey() { return 'PhoneBack.SetPriorityticket'; }
        protected getDialogType() { return SetPriorityticketDialog; }
        protected getIdProperty() { return SetPriorityticketRow.idProperty; }
        protected getLocalTextPrefix() { return SetPriorityticketRow.localTextPrefix; }
        protected getService() { return SetPriorityticketService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}