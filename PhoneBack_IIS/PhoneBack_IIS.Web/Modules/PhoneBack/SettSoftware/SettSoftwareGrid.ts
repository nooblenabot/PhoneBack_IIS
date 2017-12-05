
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class SettSoftwareGrid extends Serenity.EntityGrid<SettSoftwareRow, any> {
        protected getColumnsKey() { return 'PhoneBack.SettSoftware'; }
        protected getDialogType() { return SettSoftwareDialog; }
        protected getIdProperty() { return SettSoftwareRow.idProperty; }
        protected getLocalTextPrefix() { return SettSoftwareRow.localTextPrefix; }
        protected getService() { return SettSoftwareService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            //let now = new Date();
            this.editItem(<SettSoftwareRow>{
                IsActive: true,
            });
        }
    }
}