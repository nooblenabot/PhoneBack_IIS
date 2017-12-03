
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class SetMycompanyGrid extends Serenity.EntityGrid<SetMycompanyRow, any> {
        protected getColumnsKey() { return 'PhoneBack.SetMycompany'; }
        protected getDialogType() { return SetMycompanyDialog; }
        protected getIdProperty() { return SetMycompanyRow.idProperty; }
        protected getLocalTextPrefix() { return SetMycompanyRow.localTextPrefix; }
        protected getService() { return SetMycompanyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}