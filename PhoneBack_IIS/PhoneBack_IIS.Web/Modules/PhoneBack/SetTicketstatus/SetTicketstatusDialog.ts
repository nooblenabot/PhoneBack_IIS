
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetTicketstatusDialog extends Serenity.EntityDialog<SetTicketstatusRow, any> {
        protected getFormKey() { return SetTicketstatusForm.formKey; }
        protected getIdProperty() { return SetTicketstatusRow.idProperty; }
        protected getLocalTextPrefix() { return SetTicketstatusRow.localTextPrefix; }
        protected getNameProperty() { return SetTicketstatusRow.nameProperty; }
        protected getService() { return SetTicketstatusService.baseUrl; }

        protected form = new SetTicketstatusForm(this.idPrefix);

    }
}