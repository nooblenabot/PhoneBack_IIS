
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class SetCountryGrid extends Serenity.EntityGrid<SetCountryRow, any> {
        protected getColumnsKey() { return 'PhoneBack.SetCountry'; }
        protected getDialogType() { return SetCountryDialog; }
        protected getIdProperty() { return SetCountryRow.idProperty; }
        protected getLocalTextPrefix() { return SetCountryRow.localTextPrefix; }
        protected getService() { return SetCountryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}