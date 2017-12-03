
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetMycompanyDialog extends Serenity.EntityDialog<SetMycompanyRow, any> {
        protected getFormKey() { return SetMycompanyForm.formKey; }
        protected getIdProperty() { return SetMycompanyRow.idProperty; }
        protected getLocalTextPrefix() { return SetMycompanyRow.localTextPrefix; }
        protected getNameProperty() { return SetMycompanyRow.nameProperty; }
        protected getService() { return SetMycompanyService.baseUrl; }

        protected form = new SetMycompanyForm(this.idPrefix);

    }
}