
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketDialog extends Serenity.EntityDialog<TicketRow, any> {
        protected getFormKey() { return TicketForm.formKey; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getNameProperty() { return TicketRow.nameProperty; }
        protected getService() { return TicketService.baseUrl; }

        protected form = new TicketForm(this.idPrefix);

    }
}