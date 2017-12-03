
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class SetConsumerstatusGrid extends Serenity.EntityGrid<SetConsumerstatusRow, any> {
        protected getColumnsKey() { return 'PhoneBack.SetConsumerstatus'; }
        protected getDialogType() { return SetConsumerstatusDialog; }
        protected getIdProperty() { return SetConsumerstatusRow.idProperty; }
        protected getLocalTextPrefix() { return SetConsumerstatusRow.localTextPrefix; }
        protected getService() { return SetConsumerstatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}