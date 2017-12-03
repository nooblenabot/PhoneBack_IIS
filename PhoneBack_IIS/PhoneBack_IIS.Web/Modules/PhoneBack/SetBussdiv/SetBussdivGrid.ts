
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class SetBussdivGrid extends Serenity.EntityGrid<SetBussdivRow, any> {
        protected getColumnsKey() { return 'PhoneBack.SetBussdiv'; }
        protected getDialogType() { return SetBussdivDialog; }
        protected getIdProperty() { return SetBussdivRow.idProperty; }
        protected getLocalTextPrefix() { return SetBussdivRow.localTextPrefix; }
        protected getService() { return SetBussdivService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}