
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SettSoftwareDialog extends Serenity.EntityDialog<SettSoftwareRow, any> {
        protected getFormKey() { return SettSoftwareForm.formKey; }
        protected getIdProperty() { return SettSoftwareRow.idProperty; }
        protected getLocalTextPrefix() { return SettSoftwareRow.localTextPrefix; }
        protected getNameProperty() { return SettSoftwareRow.nameProperty; }
        protected getService() { return SettSoftwareService.baseUrl; }

        protected form = new SettSoftwareForm(this.idPrefix);

    }
}