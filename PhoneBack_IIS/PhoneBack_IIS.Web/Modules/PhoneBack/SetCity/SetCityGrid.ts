
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class SetCityGrid extends Serenity.EntityGrid<SetCityRow, any> {
        protected getColumnsKey() { return 'PhoneBack.SetCity'; }
        protected getDialogType() { return SetCityDialog; }
        protected getIdProperty() { return SetCityRow.idProperty; }
        protected getLocalTextPrefix() { return SetCityRow.localTextPrefix; }
        protected getService() { return SetCityService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}