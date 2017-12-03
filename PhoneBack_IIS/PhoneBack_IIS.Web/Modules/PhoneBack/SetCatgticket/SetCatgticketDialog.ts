
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetCatgticketDialog extends Serenity.EntityDialog<SetCatgticketRow, any> {
        protected getFormKey() { return SetCatgticketForm.formKey; }
        protected getIdProperty() { return SetCatgticketRow.idProperty; }
        protected getLocalTextPrefix() { return SetCatgticketRow.localTextPrefix; }
        protected getNameProperty() { return SetCatgticketRow.nameProperty; }
        protected getService() { return SetCatgticketService.baseUrl; }

        protected form = new SetCatgticketForm(this.idPrefix);

    }
}