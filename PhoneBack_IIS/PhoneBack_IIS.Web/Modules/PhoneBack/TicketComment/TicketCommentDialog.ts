
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketCommentDialog extends Serenity.EntityDialog<TicketCommentRow, any> {
        protected getFormKey() { return TicketCommentForm.formKey; }
        protected getIdProperty() { return TicketCommentRow.idProperty; }
        protected getLocalTextPrefix() { return TicketCommentRow.localTextPrefix; }
        protected getNameProperty() { return TicketCommentRow.nameProperty; }
        protected getService() { return TicketCommentService.baseUrl; }

        protected form = new TicketCommentForm(this.idPrefix);

    }
}