
namespace PhoneBack_IIS.PhoneBack {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.panel()
    export class TicketDialog extends Serenity.EntityDialog<TicketRow, any> {
        protected getFormKey() { return TicketForm.formKey; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getNameProperty() { return TicketRow.nameProperty; }
        protected getService() { return TicketService.baseUrl; }

        protected form = new TicketForm(this.idPrefix);

        protected updateInterface():void {
            if (Authorization.hasPermission("Ticket:Read:Modify")) { }
            else {
                super.updateInterface();
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                this.element.find('sup').hide();
                this.deleteButton.hide();
                this.applyChangesButton.hide();
                this.saveAndCloseButton.hide();
            }
        }
        protected getEntityTitle(): string {
            if (!this.isEditMode()) { }
            else {
                var entityType = super.getEntitySingular();
                let name = this.getEntityNameFieldValue() || "";
                return 'View ' + entityType + " (" + name + ")";
            }
        }
        protected updateTitle():void {
            super.updateTitle();
        }
    }
    //export class CloneableEntityDialog extends PhoneBack.TicketDialog {
    //    protected updateInterface() {
    //        if (Authorization.hasPermission("Ticket:Read:Modify")) {
    //            super.updateInterface();
    //            this.cloneButton.toggle(this.isEditMode());
    //        }
    //    }

    //    protected getCloningEntity() {
    //        var clone = super.getCloningEntity();
    //        var suffix = ' (Clone)';
    //        if (!Q.endsWith(clone.Subject || '', suffix)) {
    //            clone.Subject = (clone.Subject || '') + suffix;
    //        }
    //    }
    //    protected updateTitle(): void {
    //        super.updateTitle();
    //    }
    //}

}