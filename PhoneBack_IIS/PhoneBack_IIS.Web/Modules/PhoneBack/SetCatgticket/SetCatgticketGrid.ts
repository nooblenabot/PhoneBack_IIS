
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class SetCatgticketGrid extends Serenity.EntityGrid<SetCatgticketRow, any> {
        protected getColumnsKey() { return 'PhoneBack.SetCatgticket'; }
        protected getDialogType() { return SetCatgticketDialog; }
        protected getIdProperty() { return SetCatgticketRow.idProperty; }
        protected getLocalTextPrefix() { return SetCatgticketRow.localTextPrefix; }
        protected getService() { return SetCatgticketService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}