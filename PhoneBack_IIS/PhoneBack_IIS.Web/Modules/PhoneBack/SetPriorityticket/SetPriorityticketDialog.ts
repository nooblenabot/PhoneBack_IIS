
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetPriorityticketDialog extends Serenity.EntityDialog<SetPriorityticketRow, any> {
        protected getFormKey() { return SetPriorityticketForm.formKey; }
        protected getIdProperty() { return SetPriorityticketRow.idProperty; }
        protected getLocalTextPrefix() { return SetPriorityticketRow.localTextPrefix; }
        protected getNameProperty() { return SetPriorityticketRow.nameProperty; }
        protected getService() { return SetPriorityticketService.baseUrl; }

        protected form = new SetPriorityticketForm(this.idPrefix);

    }
}