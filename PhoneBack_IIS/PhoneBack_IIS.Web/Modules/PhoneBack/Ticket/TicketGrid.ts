
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    export class TicketGrid extends Serenity.EntityGrid<TicketRow, any> {
        protected getColumnsKey() { return 'PhoneBack.Ticket'; }
        protected getDialogType() { return TicketDialog; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getService() { return TicketService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            //let now = new Date();
            this.editItem(<TicketRow>{
                Status: 1,
                Priority: 1
            });
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons()
            if (Authorization.hasPermission("Ticket:Read:Modify")) { }
            else
            {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            }
            return buttons;
        }
    }
}