
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetBussdivDialog extends Serenity.EntityDialog<SetBussdivRow, any> {
        protected getFormKey() { return SetBussdivForm.formKey; }
        protected getIdProperty() { return SetBussdivRow.idProperty; }
        protected getLocalTextPrefix() { return SetBussdivRow.localTextPrefix; }
        protected getNameProperty() { return SetBussdivRow.nameProperty; }
        protected getService() { return SetBussdivService.baseUrl; }

        protected form = new SetBussdivForm(this.idPrefix);

    }
}