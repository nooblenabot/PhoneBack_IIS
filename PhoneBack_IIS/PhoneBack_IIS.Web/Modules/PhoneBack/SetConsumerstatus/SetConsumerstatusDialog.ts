
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetConsumerstatusDialog extends Serenity.EntityDialog<SetConsumerstatusRow, any> {
        protected getFormKey() { return SetConsumerstatusForm.formKey; }
        protected getIdProperty() { return SetConsumerstatusRow.idProperty; }
        protected getLocalTextPrefix() { return SetConsumerstatusRow.localTextPrefix; }
        protected getNameProperty() { return SetConsumerstatusRow.nameProperty; }
        protected getService() { return SetConsumerstatusService.baseUrl; }

        protected form = new SetConsumerstatusForm(this.idPrefix);

    }
}