
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ConsumerDialog extends Serenity.EntityDialog<ConsumerRow, any> {
        protected getFormKey() { return ConsumerForm.formKey; }
        protected getIdProperty() { return ConsumerRow.idProperty; }
        protected getLocalTextPrefix() { return ConsumerRow.localTextPrefix; }
        protected getNameProperty() { return ConsumerRow.nameProperty; }
        protected getService() { return ConsumerService.baseUrl; }

        protected form = new ConsumerForm(this.idPrefix);

        constructor() {
            super();

        //    this.form.IsMorale.change(e => {
        //        if (this.form.IsMorale.value = true)
        //            Serenity.EditorUtils.setReadOnly(this.form.ConsumerName, true);

        //        if (this.form.IsMorale.value = false)
        //            // Set read only to false for a field
        //            Serenity.EditorUtils.setReadOnly(this.form.CorporateName, true);
        //    }
        //    );
        }

    }
}