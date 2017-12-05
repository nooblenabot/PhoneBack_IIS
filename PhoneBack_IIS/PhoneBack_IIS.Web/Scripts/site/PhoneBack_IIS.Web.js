var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var UsersDialog = /** @class */ (function (_super) {
            __extends(UsersDialog, _super);
            function UsersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.UsersForm(_this.idPrefix);
                return _this;
            }
            UsersDialog.prototype.getFormKey = function () { return PhoneBack.UsersForm.formKey; };
            UsersDialog.prototype.getIdProperty = function () { return PhoneBack.UsersRow.idProperty; };
            UsersDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.UsersRow.localTextPrefix; };
            UsersDialog.prototype.getNameProperty = function () { return PhoneBack.UsersRow.nameProperty; };
            UsersDialog.prototype.getService = function () { return PhoneBack.UsersService.baseUrl; };
            UsersDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], UsersDialog);
            return UsersDialog;
        }(Serenity.EntityDialog));
        PhoneBack.UsersDialog = UsersDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var UsersGrid = /** @class */ (function (_super) {
            __extends(UsersGrid, _super);
            function UsersGrid(container) {
                return _super.call(this, container) || this;
            }
            UsersGrid.prototype.getColumnsKey = function () { return 'PhoneBack.Users'; };
            UsersGrid.prototype.getDialogType = function () { return PhoneBack.UsersDialog; };
            UsersGrid.prototype.getIdProperty = function () { return PhoneBack.UsersRow.idProperty; };
            UsersGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.UsersRow.localTextPrefix; };
            UsersGrid.prototype.getService = function () { return PhoneBack.UsersService.baseUrl; };
            UsersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UsersGrid);
            return UsersGrid;
        }(Serenity.EntityGrid));
        PhoneBack.UsersGrid = UsersGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var TicketCommentDialog = /** @class */ (function (_super) {
            __extends(TicketCommentDialog, _super);
            function TicketCommentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.TicketCommentForm(_this.idPrefix);
                return _this;
            }
            TicketCommentDialog.prototype.getFormKey = function () { return PhoneBack.TicketCommentForm.formKey; };
            TicketCommentDialog.prototype.getIdProperty = function () { return PhoneBack.TicketCommentRow.idProperty; };
            TicketCommentDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.TicketCommentRow.localTextPrefix; };
            TicketCommentDialog.prototype.getNameProperty = function () { return PhoneBack.TicketCommentRow.nameProperty; };
            TicketCommentDialog.prototype.getService = function () { return PhoneBack.TicketCommentService.baseUrl; };
            TicketCommentDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TicketCommentDialog);
            return TicketCommentDialog;
        }(Serenity.EntityDialog));
        PhoneBack.TicketCommentDialog = TicketCommentDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var TicketCommentGrid = /** @class */ (function (_super) {
            __extends(TicketCommentGrid, _super);
            function TicketCommentGrid(container) {
                return _super.call(this, container) || this;
            }
            TicketCommentGrid.prototype.getColumnsKey = function () { return 'PhoneBack.TicketComment'; };
            TicketCommentGrid.prototype.getDialogType = function () { return PhoneBack.TicketCommentDialog; };
            TicketCommentGrid.prototype.getIdProperty = function () { return PhoneBack.TicketCommentRow.idProperty; };
            TicketCommentGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.TicketCommentRow.localTextPrefix; };
            TicketCommentGrid.prototype.getService = function () { return PhoneBack.TicketCommentService.baseUrl; };
            TicketCommentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TicketCommentGrid);
            return TicketCommentGrid;
        }(Serenity.EntityGrid));
        PhoneBack.TicketCommentGrid = TicketCommentGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var TicketDialog = /** @class */ (function (_super) {
            __extends(TicketDialog, _super);
            function TicketDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.TicketForm(_this.idPrefix);
                return _this;
            }
            TicketDialog.prototype.getFormKey = function () { return PhoneBack.TicketForm.formKey; };
            TicketDialog.prototype.getIdProperty = function () { return PhoneBack.TicketRow.idProperty; };
            TicketDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.TicketRow.localTextPrefix; };
            TicketDialog.prototype.getNameProperty = function () { return PhoneBack.TicketRow.nameProperty; };
            TicketDialog.prototype.getService = function () { return PhoneBack.TicketService.baseUrl; };
            TicketDialog.prototype.updateInterface = function () {
                if (PhoneBack_IIS.Authorization.hasPermission("Ticket:Read:Modify")) { }
                else {
                    _super.prototype.updateInterface.call(this);
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                    this.element.find('sup').hide();
                    this.deleteButton.hide();
                    this.applyChangesButton.hide();
                    this.saveAndCloseButton.hide();
                }
            };
            TicketDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) { }
                else {
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    var name_1 = this.getEntityNameFieldValue() || "";
                    return 'View ' + entityType + " (" + name_1 + ")";
                }
            };
            TicketDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
            };
            TicketDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.panel()
            ], TicketDialog);
            return TicketDialog;
        }(Serenity.EntityDialog));
        PhoneBack.TicketDialog = TicketDialog;
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
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var TicketGrid = /** @class */ (function (_super) {
            __extends(TicketGrid, _super);
            function TicketGrid(container) {
                return _super.call(this, container) || this;
            }
            TicketGrid.prototype.getColumnsKey = function () { return 'PhoneBack.Ticket'; };
            TicketGrid.prototype.getDialogType = function () { return PhoneBack.TicketDialog; };
            TicketGrid.prototype.getIdProperty = function () { return PhoneBack.TicketRow.idProperty; };
            TicketGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.TicketRow.localTextPrefix; };
            TicketGrid.prototype.getService = function () { return PhoneBack.TicketService.baseUrl; };
            TicketGrid.prototype.addButtonClick = function () {
                //let now = new Date();
                this.editItem({
                    Status: 1,
                    Priority: 1
                });
            };
            TicketGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (PhoneBack_IIS.Authorization.hasPermission("Ticket:Read:Modify")) { }
                else {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                }
                return buttons;
            };
            TicketGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TicketGrid);
            return TicketGrid;
        }(Serenity.EntityGrid));
        PhoneBack.TicketGrid = TicketGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SettSoftwareDialog = /** @class */ (function (_super) {
            __extends(SettSoftwareDialog, _super);
            function SettSoftwareDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.SettSoftwareForm(_this.idPrefix);
                return _this;
            }
            SettSoftwareDialog.prototype.getFormKey = function () { return PhoneBack.SettSoftwareForm.formKey; };
            SettSoftwareDialog.prototype.getIdProperty = function () { return PhoneBack.SettSoftwareRow.idProperty; };
            SettSoftwareDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.SettSoftwareRow.localTextPrefix; };
            SettSoftwareDialog.prototype.getNameProperty = function () { return PhoneBack.SettSoftwareRow.nameProperty; };
            SettSoftwareDialog.prototype.getService = function () { return PhoneBack.SettSoftwareService.baseUrl; };
            SettSoftwareDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SettSoftwareDialog);
            return SettSoftwareDialog;
        }(Serenity.EntityDialog));
        PhoneBack.SettSoftwareDialog = SettSoftwareDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SettSoftwareGrid = /** @class */ (function (_super) {
            __extends(SettSoftwareGrid, _super);
            function SettSoftwareGrid(container) {
                return _super.call(this, container) || this;
            }
            SettSoftwareGrid.prototype.getColumnsKey = function () { return 'PhoneBack.SettSoftware'; };
            SettSoftwareGrid.prototype.getDialogType = function () { return PhoneBack.SettSoftwareDialog; };
            SettSoftwareGrid.prototype.getIdProperty = function () { return PhoneBack.SettSoftwareRow.idProperty; };
            SettSoftwareGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.SettSoftwareRow.localTextPrefix; };
            SettSoftwareGrid.prototype.getService = function () { return PhoneBack.SettSoftwareService.baseUrl; };
            SettSoftwareGrid.prototype.addButtonClick = function () {
                //let now = new Date();
                this.editItem({
                    IsActive: true,
                });
            };
            SettSoftwareGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SettSoftwareGrid);
            return SettSoftwareGrid;
        }(Serenity.EntityGrid));
        PhoneBack.SettSoftwareGrid = SettSoftwareGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetTicketstatusDialog = /** @class */ (function (_super) {
            __extends(SetTicketstatusDialog, _super);
            function SetTicketstatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.SetTicketstatusForm(_this.idPrefix);
                return _this;
            }
            SetTicketstatusDialog.prototype.getFormKey = function () { return PhoneBack.SetTicketstatusForm.formKey; };
            SetTicketstatusDialog.prototype.getIdProperty = function () { return PhoneBack.SetTicketstatusRow.idProperty; };
            SetTicketstatusDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.SetTicketstatusRow.localTextPrefix; };
            SetTicketstatusDialog.prototype.getNameProperty = function () { return PhoneBack.SetTicketstatusRow.nameProperty; };
            SetTicketstatusDialog.prototype.getService = function () { return PhoneBack.SetTicketstatusService.baseUrl; };
            SetTicketstatusDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SetTicketstatusDialog);
            return SetTicketstatusDialog;
        }(Serenity.EntityDialog));
        PhoneBack.SetTicketstatusDialog = SetTicketstatusDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetTicketstatusGrid = /** @class */ (function (_super) {
            __extends(SetTicketstatusGrid, _super);
            function SetTicketstatusGrid(container) {
                return _super.call(this, container) || this;
            }
            SetTicketstatusGrid.prototype.getColumnsKey = function () { return 'PhoneBack.SetTicketstatus'; };
            SetTicketstatusGrid.prototype.getDialogType = function () { return PhoneBack.SetTicketstatusDialog; };
            SetTicketstatusGrid.prototype.getIdProperty = function () { return PhoneBack.SetTicketstatusRow.idProperty; };
            SetTicketstatusGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.SetTicketstatusRow.localTextPrefix; };
            SetTicketstatusGrid.prototype.getService = function () { return PhoneBack.SetTicketstatusService.baseUrl; };
            SetTicketstatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SetTicketstatusGrid);
            return SetTicketstatusGrid;
        }(Serenity.EntityGrid));
        PhoneBack.SetTicketstatusGrid = SetTicketstatusGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetPriorityticketDialog = /** @class */ (function (_super) {
            __extends(SetPriorityticketDialog, _super);
            function SetPriorityticketDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.SetPriorityticketForm(_this.idPrefix);
                return _this;
            }
            SetPriorityticketDialog.prototype.getFormKey = function () { return PhoneBack.SetPriorityticketForm.formKey; };
            SetPriorityticketDialog.prototype.getIdProperty = function () { return PhoneBack.SetPriorityticketRow.idProperty; };
            SetPriorityticketDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.SetPriorityticketRow.localTextPrefix; };
            SetPriorityticketDialog.prototype.getNameProperty = function () { return PhoneBack.SetPriorityticketRow.nameProperty; };
            SetPriorityticketDialog.prototype.getService = function () { return PhoneBack.SetPriorityticketService.baseUrl; };
            SetPriorityticketDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SetPriorityticketDialog);
            return SetPriorityticketDialog;
        }(Serenity.EntityDialog));
        PhoneBack.SetPriorityticketDialog = SetPriorityticketDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetPriorityticketGrid = /** @class */ (function (_super) {
            __extends(SetPriorityticketGrid, _super);
            function SetPriorityticketGrid(container) {
                return _super.call(this, container) || this;
            }
            SetPriorityticketGrid.prototype.getColumnsKey = function () { return 'PhoneBack.SetPriorityticket'; };
            SetPriorityticketGrid.prototype.getDialogType = function () { return PhoneBack.SetPriorityticketDialog; };
            SetPriorityticketGrid.prototype.getIdProperty = function () { return PhoneBack.SetPriorityticketRow.idProperty; };
            SetPriorityticketGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.SetPriorityticketRow.localTextPrefix; };
            SetPriorityticketGrid.prototype.getService = function () { return PhoneBack.SetPriorityticketService.baseUrl; };
            SetPriorityticketGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SetPriorityticketGrid);
            return SetPriorityticketGrid;
        }(Serenity.EntityGrid));
        PhoneBack.SetPriorityticketGrid = SetPriorityticketGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetMycompanyDialog = /** @class */ (function (_super) {
            __extends(SetMycompanyDialog, _super);
            function SetMycompanyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.SetMycompanyForm(_this.idPrefix);
                return _this;
            }
            SetMycompanyDialog.prototype.getFormKey = function () { return PhoneBack.SetMycompanyForm.formKey; };
            SetMycompanyDialog.prototype.getIdProperty = function () { return PhoneBack.SetMycompanyRow.idProperty; };
            SetMycompanyDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.SetMycompanyRow.localTextPrefix; };
            SetMycompanyDialog.prototype.getNameProperty = function () { return PhoneBack.SetMycompanyRow.nameProperty; };
            SetMycompanyDialog.prototype.getService = function () { return PhoneBack.SetMycompanyService.baseUrl; };
            SetMycompanyDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SetMycompanyDialog);
            return SetMycompanyDialog;
        }(Serenity.EntityDialog));
        PhoneBack.SetMycompanyDialog = SetMycompanyDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetMycompanyGrid = /** @class */ (function (_super) {
            __extends(SetMycompanyGrid, _super);
            function SetMycompanyGrid(container) {
                return _super.call(this, container) || this;
            }
            SetMycompanyGrid.prototype.getColumnsKey = function () { return 'PhoneBack.SetMycompany'; };
            SetMycompanyGrid.prototype.getDialogType = function () { return PhoneBack.SetMycompanyDialog; };
            SetMycompanyGrid.prototype.getIdProperty = function () { return PhoneBack.SetMycompanyRow.idProperty; };
            SetMycompanyGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.SetMycompanyRow.localTextPrefix; };
            SetMycompanyGrid.prototype.getService = function () { return PhoneBack.SetMycompanyService.baseUrl; };
            SetMycompanyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SetMycompanyGrid);
            return SetMycompanyGrid;
        }(Serenity.EntityGrid));
        PhoneBack.SetMycompanyGrid = SetMycompanyGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCountryDialog = /** @class */ (function (_super) {
            __extends(SetCountryDialog, _super);
            function SetCountryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.SetCountryForm(_this.idPrefix);
                return _this;
            }
            SetCountryDialog.prototype.getFormKey = function () { return PhoneBack.SetCountryForm.formKey; };
            SetCountryDialog.prototype.getIdProperty = function () { return PhoneBack.SetCountryRow.idProperty; };
            SetCountryDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.SetCountryRow.localTextPrefix; };
            SetCountryDialog.prototype.getNameProperty = function () { return PhoneBack.SetCountryRow.nameProperty; };
            SetCountryDialog.prototype.getService = function () { return PhoneBack.SetCountryService.baseUrl; };
            SetCountryDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SetCountryDialog);
            return SetCountryDialog;
        }(Serenity.EntityDialog));
        PhoneBack.SetCountryDialog = SetCountryDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCountryGrid = /** @class */ (function (_super) {
            __extends(SetCountryGrid, _super);
            function SetCountryGrid(container) {
                return _super.call(this, container) || this;
            }
            SetCountryGrid.prototype.getColumnsKey = function () { return 'PhoneBack.SetCountry'; };
            SetCountryGrid.prototype.getDialogType = function () { return PhoneBack.SetCountryDialog; };
            SetCountryGrid.prototype.getIdProperty = function () { return PhoneBack.SetCountryRow.idProperty; };
            SetCountryGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.SetCountryRow.localTextPrefix; };
            SetCountryGrid.prototype.getService = function () { return PhoneBack.SetCountryService.baseUrl; };
            SetCountryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SetCountryGrid);
            return SetCountryGrid;
        }(Serenity.EntityGrid));
        PhoneBack.SetCountryGrid = SetCountryGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetConsumerstatusDialog = /** @class */ (function (_super) {
            __extends(SetConsumerstatusDialog, _super);
            function SetConsumerstatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.SetConsumerstatusForm(_this.idPrefix);
                return _this;
            }
            SetConsumerstatusDialog.prototype.getFormKey = function () { return PhoneBack.SetConsumerstatusForm.formKey; };
            SetConsumerstatusDialog.prototype.getIdProperty = function () { return PhoneBack.SetConsumerstatusRow.idProperty; };
            SetConsumerstatusDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.SetConsumerstatusRow.localTextPrefix; };
            SetConsumerstatusDialog.prototype.getNameProperty = function () { return PhoneBack.SetConsumerstatusRow.nameProperty; };
            SetConsumerstatusDialog.prototype.getService = function () { return PhoneBack.SetConsumerstatusService.baseUrl; };
            SetConsumerstatusDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SetConsumerstatusDialog);
            return SetConsumerstatusDialog;
        }(Serenity.EntityDialog));
        PhoneBack.SetConsumerstatusDialog = SetConsumerstatusDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetConsumerstatusGrid = /** @class */ (function (_super) {
            __extends(SetConsumerstatusGrid, _super);
            function SetConsumerstatusGrid(container) {
                return _super.call(this, container) || this;
            }
            SetConsumerstatusGrid.prototype.getColumnsKey = function () { return 'PhoneBack.SetConsumerstatus'; };
            SetConsumerstatusGrid.prototype.getDialogType = function () { return PhoneBack.SetConsumerstatusDialog; };
            SetConsumerstatusGrid.prototype.getIdProperty = function () { return PhoneBack.SetConsumerstatusRow.idProperty; };
            SetConsumerstatusGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.SetConsumerstatusRow.localTextPrefix; };
            SetConsumerstatusGrid.prototype.getService = function () { return PhoneBack.SetConsumerstatusService.baseUrl; };
            SetConsumerstatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SetConsumerstatusGrid);
            return SetConsumerstatusGrid;
        }(Serenity.EntityGrid));
        PhoneBack.SetConsumerstatusGrid = SetConsumerstatusGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCityDialog = /** @class */ (function (_super) {
            __extends(SetCityDialog, _super);
            function SetCityDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.SetCityForm(_this.idPrefix);
                return _this;
            }
            SetCityDialog.prototype.getFormKey = function () { return PhoneBack.SetCityForm.formKey; };
            SetCityDialog.prototype.getIdProperty = function () { return PhoneBack.SetCityRow.idProperty; };
            SetCityDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.SetCityRow.localTextPrefix; };
            SetCityDialog.prototype.getNameProperty = function () { return PhoneBack.SetCityRow.nameProperty; };
            SetCityDialog.prototype.getService = function () { return PhoneBack.SetCityService.baseUrl; };
            SetCityDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SetCityDialog);
            return SetCityDialog;
        }(Serenity.EntityDialog));
        PhoneBack.SetCityDialog = SetCityDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCityGrid = /** @class */ (function (_super) {
            __extends(SetCityGrid, _super);
            function SetCityGrid(container) {
                return _super.call(this, container) || this;
            }
            SetCityGrid.prototype.getColumnsKey = function () { return 'PhoneBack.SetCity'; };
            SetCityGrid.prototype.getDialogType = function () { return PhoneBack.SetCityDialog; };
            SetCityGrid.prototype.getIdProperty = function () { return PhoneBack.SetCityRow.idProperty; };
            SetCityGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.SetCityRow.localTextPrefix; };
            SetCityGrid.prototype.getService = function () { return PhoneBack.SetCityService.baseUrl; };
            SetCityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SetCityGrid);
            return SetCityGrid;
        }(Serenity.EntityGrid));
        PhoneBack.SetCityGrid = SetCityGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCatgticketDialog = /** @class */ (function (_super) {
            __extends(SetCatgticketDialog, _super);
            function SetCatgticketDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.SetCatgticketForm(_this.idPrefix);
                return _this;
            }
            SetCatgticketDialog.prototype.getFormKey = function () { return PhoneBack.SetCatgticketForm.formKey; };
            SetCatgticketDialog.prototype.getIdProperty = function () { return PhoneBack.SetCatgticketRow.idProperty; };
            SetCatgticketDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.SetCatgticketRow.localTextPrefix; };
            SetCatgticketDialog.prototype.getNameProperty = function () { return PhoneBack.SetCatgticketRow.nameProperty; };
            SetCatgticketDialog.prototype.getService = function () { return PhoneBack.SetCatgticketService.baseUrl; };
            SetCatgticketDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SetCatgticketDialog);
            return SetCatgticketDialog;
        }(Serenity.EntityDialog));
        PhoneBack.SetCatgticketDialog = SetCatgticketDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCatgticketGrid = /** @class */ (function (_super) {
            __extends(SetCatgticketGrid, _super);
            function SetCatgticketGrid(container) {
                return _super.call(this, container) || this;
            }
            SetCatgticketGrid.prototype.getColumnsKey = function () { return 'PhoneBack.SetCatgticket'; };
            SetCatgticketGrid.prototype.getDialogType = function () { return PhoneBack.SetCatgticketDialog; };
            SetCatgticketGrid.prototype.getIdProperty = function () { return PhoneBack.SetCatgticketRow.idProperty; };
            SetCatgticketGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.SetCatgticketRow.localTextPrefix; };
            SetCatgticketGrid.prototype.getService = function () { return PhoneBack.SetCatgticketService.baseUrl; };
            SetCatgticketGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SetCatgticketGrid);
            return SetCatgticketGrid;
        }(Serenity.EntityGrid));
        PhoneBack.SetCatgticketGrid = SetCatgticketGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetBussdivDialog = /** @class */ (function (_super) {
            __extends(SetBussdivDialog, _super);
            function SetBussdivDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.SetBussdivForm(_this.idPrefix);
                return _this;
            }
            SetBussdivDialog.prototype.getFormKey = function () { return PhoneBack.SetBussdivForm.formKey; };
            SetBussdivDialog.prototype.getIdProperty = function () { return PhoneBack.SetBussdivRow.idProperty; };
            SetBussdivDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.SetBussdivRow.localTextPrefix; };
            SetBussdivDialog.prototype.getNameProperty = function () { return PhoneBack.SetBussdivRow.nameProperty; };
            SetBussdivDialog.prototype.getService = function () { return PhoneBack.SetBussdivService.baseUrl; };
            SetBussdivDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SetBussdivDialog);
            return SetBussdivDialog;
        }(Serenity.EntityDialog));
        PhoneBack.SetBussdivDialog = SetBussdivDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetBussdivGrid = /** @class */ (function (_super) {
            __extends(SetBussdivGrid, _super);
            function SetBussdivGrid(container) {
                return _super.call(this, container) || this;
            }
            SetBussdivGrid.prototype.getColumnsKey = function () { return 'PhoneBack.SetBussdiv'; };
            SetBussdivGrid.prototype.getDialogType = function () { return PhoneBack.SetBussdivDialog; };
            SetBussdivGrid.prototype.getIdProperty = function () { return PhoneBack.SetBussdivRow.idProperty; };
            SetBussdivGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.SetBussdivRow.localTextPrefix; };
            SetBussdivGrid.prototype.getService = function () { return PhoneBack.SetBussdivService.baseUrl; };
            SetBussdivGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SetBussdivGrid);
            return SetBussdivGrid;
        }(Serenity.EntityGrid));
        PhoneBack.SetBussdivGrid = SetBussdivGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var PersonDialog = /** @class */ (function (_super) {
            __extends(PersonDialog, _super);
            function PersonDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.PersonForm(_this.idPrefix);
                return _this;
            }
            PersonDialog.prototype.getFormKey = function () { return PhoneBack.PersonForm.formKey; };
            PersonDialog.prototype.getIdProperty = function () { return PhoneBack.PersonRow.idProperty; };
            PersonDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.PersonRow.localTextPrefix; };
            PersonDialog.prototype.getNameProperty = function () { return PhoneBack.PersonRow.nameProperty; };
            PersonDialog.prototype.getService = function () { return PhoneBack.PersonService.baseUrl; };
            PersonDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PersonDialog);
            return PersonDialog;
        }(Serenity.EntityDialog));
        PhoneBack.PersonDialog = PersonDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var PersonGrid = /** @class */ (function (_super) {
            __extends(PersonGrid, _super);
            function PersonGrid(container) {
                return _super.call(this, container) || this;
            }
            PersonGrid.prototype.getColumnsKey = function () { return 'PhoneBack.Person'; };
            PersonGrid.prototype.getDialogType = function () { return PhoneBack.PersonDialog; };
            PersonGrid.prototype.getIdProperty = function () { return PhoneBack.PersonRow.idProperty; };
            PersonGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.PersonRow.localTextPrefix; };
            PersonGrid.prototype.getService = function () { return PhoneBack.PersonService.baseUrl; };
            PersonGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonGrid);
            return PersonGrid;
        }(Serenity.EntityGrid));
        PhoneBack.PersonGrid = PersonGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var ConsumerDialog = /** @class */ (function (_super) {
            __extends(ConsumerDialog, _super);
            function ConsumerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PhoneBack.ConsumerForm(_this.idPrefix);
                return _this;
            }
            ConsumerDialog.prototype.getFormKey = function () { return PhoneBack.ConsumerForm.formKey; };
            ConsumerDialog.prototype.getIdProperty = function () { return PhoneBack.ConsumerRow.idProperty; };
            ConsumerDialog.prototype.getLocalTextPrefix = function () { return PhoneBack.ConsumerRow.localTextPrefix; };
            ConsumerDialog.prototype.getNameProperty = function () { return PhoneBack.ConsumerRow.nameProperty; };
            ConsumerDialog.prototype.getService = function () { return PhoneBack.ConsumerService.baseUrl; };
            ConsumerDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ConsumerDialog);
            return ConsumerDialog;
        }(Serenity.EntityDialog));
        PhoneBack.ConsumerDialog = ConsumerDialog;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var ConsumerGrid = /** @class */ (function (_super) {
            __extends(ConsumerGrid, _super);
            function ConsumerGrid(container) {
                return _super.call(this, container) || this;
            }
            ConsumerGrid.prototype.getColumnsKey = function () { return 'PhoneBack.Consumer'; };
            ConsumerGrid.prototype.getDialogType = function () { return PhoneBack.ConsumerDialog; };
            ConsumerGrid.prototype.getIdProperty = function () { return PhoneBack.ConsumerRow.idProperty; };
            ConsumerGrid.prototype.getLocalTextPrefix = function () { return PhoneBack.ConsumerRow.localTextPrefix; };
            ConsumerGrid.prototype.getService = function () { return PhoneBack.ConsumerService.baseUrl; };
            ConsumerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConsumerGrid);
            return ConsumerGrid;
        }(Serenity.EntityGrid));
        PhoneBack.ConsumerGrid = ConsumerGrid;
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = PhoneBack_IIS.Membership || (PhoneBack_IIS.Membership = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = PhoneBack_IIS.Membership || (PhoneBack_IIS.Membership = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = PhoneBack_IIS.Membership || (PhoneBack_IIS.Membership = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = PhoneBack_IIS.Membership || (PhoneBack_IIS.Membership = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = PhoneBack_IIS.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = PhoneBack_IIS.LanguageList || (PhoneBack_IIS.LanguageList = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('PhoneBack_IIS');
        Serenity.EntityDialog.defaultLanguageList = PhoneBack_IIS.LanguageList.getValue;
    })(ScriptInitialization = PhoneBack_IIS.ScriptInitialization || (PhoneBack_IIS.ScriptInitialization = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    PhoneBack_IIS.BasicProgressDialog = BasicProgressDialog;
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new PhoneBack_IIS.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = PhoneBack_IIS.DialogUtils || (PhoneBack_IIS.DialogUtils = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    PhoneBack_IIS.StaticTextBlock = StaticTextBlock;
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = PhoneBack_IIS.Authorization || (PhoneBack_IIS.Authorization = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            [
                'Id',
                'LanguageId',
                'LanguageName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            [
                'RolePermissionId',
                'RoleId',
                'PermissionKey',
                'RoleRoleName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            [
                'RoleId',
                'RoleName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            [
                'UserPermissionId',
                'UserId',
                'PermissionKey',
                'Granted',
                'Username',
                'User'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            [
                'UserRoleId',
                'UserId',
                'RoleId',
                'Username',
                'User'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            [
                'UserId',
                'Username',
                'Source',
                'PasswordHash',
                'PasswordSalt',
                'DisplayName',
                'Email',
                'UserImage',
                'LastDirectoryUpdate',
                'IsActive',
                'Password',
                'PasswordConfirm',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDate'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = PhoneBack_IIS.Administration || (PhoneBack_IIS.Administration = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            [
                'UserPreferenceId',
                'UserId',
                'PreferenceType',
                'Name',
                'Value'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = PhoneBack_IIS.Common || (PhoneBack_IIS.Common = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PhoneBack_IIS.Membership || (PhoneBack_IIS.Membership = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PhoneBack_IIS.Membership || (PhoneBack_IIS.Membership = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PhoneBack_IIS.Membership || (PhoneBack_IIS.Membership = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PhoneBack_IIS.Membership || (PhoneBack_IIS.Membership = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PhoneBack_IIS.Membership || (PhoneBack_IIS.Membership = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var ConsumerForm = /** @class */ (function (_super) {
            __extends(ConsumerForm, _super);
            function ConsumerForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ConsumerForm.formKey = 'PhoneBack.Consumer';
            return ConsumerForm;
        }(Serenity.PrefixedContext));
        PhoneBack.ConsumerForm = ConsumerForm;
        [['IsMorale', function () { return Serenity.BooleanEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }], ['IsArchive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['CorporateName', function () { return Serenity.StringEditor; }], ['ConsumerName', function () { return Serenity.StringEditor; }], ['ConsumerStatus', function () { return Serenity.LookupEditor; }], ['AlertStatusConsumer', function () { return Serenity.StringEditor; }], ['Adress1', function () { return Serenity.StringEditor; }], ['Adress2', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.LookupEditor; }], ['Country', function () { return Serenity.LookupEditor; }], ['Cedex', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Gsm', function () { return Serenity.StringEditor; }], ['Email1', function () { return Serenity.StringEditor; }], ['Caption', function () { return Serenity.StringEditor; }], ['InactiveDate', function () { return Serenity.DateEditor; }], ['ArchiveDate', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(ConsumerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var ConsumerRow;
        (function (ConsumerRow) {
            ConsumerRow.idProperty = 'Id';
            ConsumerRow.nameProperty = 'CorporateName';
            ConsumerRow.localTextPrefix = 'PhoneBack.Consumer';
            ConsumerRow.lookupKey = 'PhoneBack.Consumer';
            function getLookup() {
                return Q.getLookup('PhoneBack.Consumer');
            }
            ConsumerRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ConsumerRow.Fields || (ConsumerRow.Fields = {}));
            [
                'Id',
                'IsMorale',
                'IsActive',
                'IsArchive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'CorporateName',
                'ConsumerName',
                'ConsumerStatus',
                'AlertStatusConsumer',
                'Adress1',
                'Adress2',
                'City',
                'Country',
                'Cedex',
                'Phone',
                'Gsm',
                'Email1',
                'Caption',
                'InactiveDate',
                'ArchiveDate',
                'ConsumerStatusCaption',
                'CityIsActive',
                'CityCaption',
                'City1',
                'CityPostCode',
                'CityCountry',
                'CountryNameFrFr'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ConsumerRow = PhoneBack.ConsumerRow || (PhoneBack.ConsumerRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var ConsumerService;
        (function (ConsumerService) {
            ConsumerService.baseUrl = 'PhoneBack/Consumer';
            var Methods;
            (function (Methods) {
            })(Methods = ConsumerService.Methods || (ConsumerService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ConsumerService[x] = function (r, s, o) {
                    return Q.serviceRequest(ConsumerService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ConsumerService.baseUrl + '/' + x;
            });
        })(ConsumerService = PhoneBack.ConsumerService || (PhoneBack.ConsumerService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = PhoneBack.Gender || (PhoneBack.Gender = {}));
        Serenity.Decorators.registerEnum(Gender, 'PhoneBack.Gender');
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var PersonForm = /** @class */ (function (_super) {
            __extends(PersonForm, _super);
            function PersonForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PersonForm.formKey = 'PhoneBack.Person';
            return PersonForm;
        }(Serenity.PrefixedContext));
        PhoneBack.PersonForm = PersonForm;
        [['IsActive', function () { return Serenity.BooleanEditor; }], ['IsArchive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['Surname', function () { return Serenity.StringEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['MaidenName', function () { return Serenity.StringEditor; }], ['CorporateId', function () { return Serenity.LookupEditor; }], ['Sexe', function () { return Serenity.EnumEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Gsm', function () { return Serenity.StringEditor; }], ['Email1', function () { return Serenity.StringEditor; }], ['Caption', function () { return Serenity.StringEditor; }], ['InactiveDate', function () { return Serenity.DateEditor; }], ['ArchiveDate', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(PersonForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var PersonRow;
        (function (PersonRow) {
            PersonRow.idProperty = 'Id';
            PersonRow.nameProperty = 'FullConsumer';
            PersonRow.localTextPrefix = 'PhoneBack.Person';
            PersonRow.lookupKey = 'PhoneBack.Person';
            function getLookup() {
                return Q.getLookup('PhoneBack.Person');
            }
            PersonRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PersonRow.Fields || (PersonRow.Fields = {}));
            [
                'Id',
                'IsActive',
                'IsArchive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Surname',
                'Name',
                'MaidenName',
                'CorporateId',
                'Sexe',
                'Phone',
                'Gsm',
                'Email1',
                'Caption',
                'InactiveDate',
                'ArchiveDate',
                'FullConsumer',
                'FullName',
                'CorporateIsMorale',
                'CorporateIsActive',
                'CorporateIsArchive',
                'CorporateInsertDate',
                'CorporateInsertUserId',
                'CorporateUpdateDate',
                'CorporateUpdateUserId',
                'CorporateCorporateName',
                'CorporateConsumerName',
                'CorporateConsumerStatus',
                'CorporateAlertStatusConsumer',
                'CorporateAdress1',
                'CorporateAdress2',
                'CorporateCity',
                'CorporateCountry',
                'CorporateCedex',
                'CorporatePhone',
                'CorporateGsm',
                'CorporateEmail1',
                'CorporateCaption',
                'CorporateInactiveDate',
                'CorporateArchiveDate'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PersonRow = PhoneBack.PersonRow || (PhoneBack.PersonRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var PersonService;
        (function (PersonService) {
            PersonService.baseUrl = 'PhoneBack/Person';
            var Methods;
            (function (Methods) {
            })(Methods = PersonService.Methods || (PersonService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PersonService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PersonService.baseUrl + '/' + x;
            });
        })(PersonService = PhoneBack.PersonService || (PhoneBack.PersonService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetBussdivForm = /** @class */ (function (_super) {
            __extends(SetBussdivForm, _super);
            function SetBussdivForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SetBussdivForm.formKey = 'PhoneBack.SetBussdiv';
            return SetBussdivForm;
        }(Serenity.PrefixedContext));
        PhoneBack.SetBussdivForm = SetBussdivForm;
        [['DefaultValue', function () { return Serenity.BooleanEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['Caption', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SetBussdivForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetBussdivRow;
        (function (SetBussdivRow) {
            SetBussdivRow.idProperty = 'Id';
            SetBussdivRow.nameProperty = 'Caption';
            SetBussdivRow.localTextPrefix = 'PhoneBack.SetBussdiv';
            SetBussdivRow.lookupKey = 'PhoneBack.SetBussdiv';
            function getLookup() {
                return Q.getLookup('PhoneBack.SetBussdiv');
            }
            SetBussdivRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SetBussdivRow.Fields || (SetBussdivRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Caption'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetBussdivRow = PhoneBack.SetBussdivRow || (PhoneBack.SetBussdivRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetBussdivService;
        (function (SetBussdivService) {
            SetBussdivService.baseUrl = 'PhoneBack/SetBussdiv';
            var Methods;
            (function (Methods) {
            })(Methods = SetBussdivService.Methods || (SetBussdivService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetBussdivService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetBussdivService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetBussdivService.baseUrl + '/' + x;
            });
        })(SetBussdivService = PhoneBack.SetBussdivService || (PhoneBack.SetBussdivService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCatgticketForm = /** @class */ (function (_super) {
            __extends(SetCatgticketForm, _super);
            function SetCatgticketForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SetCatgticketForm.formKey = 'PhoneBack.SetCatgticket';
            return SetCatgticketForm;
        }(Serenity.PrefixedContext));
        PhoneBack.SetCatgticketForm = SetCatgticketForm;
        [['DefaultValue', function () { return Serenity.BooleanEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['Caption', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SetCatgticketForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCatgticketRow;
        (function (SetCatgticketRow) {
            SetCatgticketRow.idProperty = 'Id';
            SetCatgticketRow.nameProperty = 'Caption';
            SetCatgticketRow.localTextPrefix = 'PhoneBack.SetCatgticket';
            SetCatgticketRow.lookupKey = 'PhoneBack.SetCatgticket';
            function getLookup() {
                return Q.getLookup('PhoneBack.SetCatgticket');
            }
            SetCatgticketRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SetCatgticketRow.Fields || (SetCatgticketRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Caption'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetCatgticketRow = PhoneBack.SetCatgticketRow || (PhoneBack.SetCatgticketRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCatgticketService;
        (function (SetCatgticketService) {
            SetCatgticketService.baseUrl = 'PhoneBack/SetCatgticket';
            var Methods;
            (function (Methods) {
            })(Methods = SetCatgticketService.Methods || (SetCatgticketService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetCatgticketService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetCatgticketService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetCatgticketService.baseUrl + '/' + x;
            });
        })(SetCatgticketService = PhoneBack.SetCatgticketService || (PhoneBack.SetCatgticketService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCityForm = /** @class */ (function (_super) {
            __extends(SetCityForm, _super);
            function SetCityForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SetCityForm.formKey = 'PhoneBack.SetCity';
            return SetCityForm;
        }(Serenity.PrefixedContext));
        PhoneBack.SetCityForm = SetCityForm;
        [['DefaultValue', function () { return Serenity.BooleanEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['FrCodeInsee', function () { return Serenity.StringEditor; }], ['Caption', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['PostCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(SetCityForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCityRow;
        (function (SetCityRow) {
            SetCityRow.idProperty = 'Id';
            SetCityRow.nameProperty = 'Caption';
            SetCityRow.localTextPrefix = 'PhoneBack.SetCity';
            SetCityRow.lookupKey = 'PhoneBack.City';
            function getLookup() {
                return Q.getLookup('PhoneBack.City');
            }
            SetCityRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SetCityRow.Fields || (SetCityRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'FrCodeInsee',
                'Caption',
                'City',
                'PostCode',
                'Country',
                'CountryNameFrFr'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetCityRow = PhoneBack.SetCityRow || (PhoneBack.SetCityRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCityService;
        (function (SetCityService) {
            SetCityService.baseUrl = 'PhoneBack/SetCity';
            var Methods;
            (function (Methods) {
            })(Methods = SetCityService.Methods || (SetCityService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetCityService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetCityService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetCityService.baseUrl + '/' + x;
            });
        })(SetCityService = PhoneBack.SetCityService || (PhoneBack.SetCityService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetConsumerstatusForm = /** @class */ (function (_super) {
            __extends(SetConsumerstatusForm, _super);
            function SetConsumerstatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SetConsumerstatusForm.formKey = 'PhoneBack.SetConsumerstatus';
            return SetConsumerstatusForm;
        }(Serenity.PrefixedContext));
        PhoneBack.SetConsumerstatusForm = SetConsumerstatusForm;
        [['DefaultValue', function () { return Serenity.BooleanEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['Caption', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SetConsumerstatusForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetConsumerstatusRow;
        (function (SetConsumerstatusRow) {
            SetConsumerstatusRow.idProperty = 'Id';
            SetConsumerstatusRow.nameProperty = 'Caption';
            SetConsumerstatusRow.localTextPrefix = 'PhoneBack.SetConsumerstatus';
            SetConsumerstatusRow.lookupKey = 'PhoneBack.SetConsumerstatus';
            function getLookup() {
                return Q.getLookup('PhoneBack.SetConsumerstatus');
            }
            SetConsumerstatusRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SetConsumerstatusRow.Fields || (SetConsumerstatusRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Caption'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetConsumerstatusRow = PhoneBack.SetConsumerstatusRow || (PhoneBack.SetConsumerstatusRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetConsumerstatusService;
        (function (SetConsumerstatusService) {
            SetConsumerstatusService.baseUrl = 'PhoneBack/SetConsumerstatus';
            var Methods;
            (function (Methods) {
            })(Methods = SetConsumerstatusService.Methods || (SetConsumerstatusService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetConsumerstatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetConsumerstatusService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetConsumerstatusService.baseUrl + '/' + x;
            });
        })(SetConsumerstatusService = PhoneBack.SetConsumerstatusService || (PhoneBack.SetConsumerstatusService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCountryForm = /** @class */ (function (_super) {
            __extends(SetCountryForm, _super);
            function SetCountryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SetCountryForm.formKey = 'PhoneBack.SetCountry';
            return SetCountryForm;
        }(Serenity.PrefixedContext));
        PhoneBack.SetCountryForm = SetCountryForm;
        [['DefaultValue', function () { return Serenity.BooleanEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['NameFrFr', function () { return Serenity.StringEditor; }], ['NameEnGb', function () { return Serenity.StringEditor; }], ['Alpha3', function () { return Serenity.StringEditor; }], ['Alpha2', function () { return Serenity.StringEditor; }], ['CodeUe', function () { return Serenity.IntegerEditor; }], ['IsOcode', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SetCountryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCountryRow;
        (function (SetCountryRow) {
            SetCountryRow.idProperty = 'Id';
            SetCountryRow.nameProperty = 'NameFrFr';
            SetCountryRow.localTextPrefix = 'PhoneBack.SetCountry';
            SetCountryRow.lookupKey = 'PhoneBack.Country';
            function getLookup() {
                return Q.getLookup('PhoneBack.Country');
            }
            SetCountryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SetCountryRow.Fields || (SetCountryRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'NameFrFr',
                'NameEnGb',
                'Alpha3',
                'Alpha2',
                'CodeUe',
                'IsOcode'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetCountryRow = PhoneBack.SetCountryRow || (PhoneBack.SetCountryRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetCountryService;
        (function (SetCountryService) {
            SetCountryService.baseUrl = 'PhoneBack/SetCountry';
            var Methods;
            (function (Methods) {
            })(Methods = SetCountryService.Methods || (SetCountryService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetCountryService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetCountryService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetCountryService.baseUrl + '/' + x;
            });
        })(SetCountryService = PhoneBack.SetCountryService || (PhoneBack.SetCountryService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetMycompanyForm = /** @class */ (function (_super) {
            __extends(SetMycompanyForm, _super);
            function SetMycompanyForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SetMycompanyForm.formKey = 'PhoneBack.SetMycompany';
            return SetMycompanyForm;
        }(Serenity.PrefixedContext));
        PhoneBack.SetMycompanyForm = SetMycompanyForm;
        [['IsActive', function () { return Serenity.BooleanEditor; }], ['IsArchive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Gsm', function () { return Serenity.StringEditor; }], ['Email1', function () { return Serenity.StringEditor; }], ['Adress', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.LookupEditor; }], ['Country', function () { return Serenity.LookupEditor; }], ['Cedex', function () { return Serenity.StringEditor; }], ['ArchiveDate', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(SetMycompanyForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetMycompanyRow;
        (function (SetMycompanyRow) {
            SetMycompanyRow.idProperty = 'Id';
            SetMycompanyRow.nameProperty = 'Name';
            SetMycompanyRow.localTextPrefix = 'PhoneBack.SetMycompany';
            SetMycompanyRow.lookupKey = 'PhoneBack.Mycompany';
            function getLookup() {
                return Q.getLookup('PhoneBack.Mycompany');
            }
            SetMycompanyRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SetMycompanyRow.Fields || (SetMycompanyRow.Fields = {}));
            [
                'Id',
                'IsActive',
                'IsArchive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Name',
                'Phone',
                'Gsm',
                'Email1',
                'Adress',
                'City',
                'Country',
                'Cedex',
                'ArchiveDate',
                'CityCaption',
                'City1',
                'CityPostCode',
                'CityCountry',
                'CountryNameFrFr'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetMycompanyRow = PhoneBack.SetMycompanyRow || (PhoneBack.SetMycompanyRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetMycompanyService;
        (function (SetMycompanyService) {
            SetMycompanyService.baseUrl = 'PhoneBack/SetMycompany';
            var Methods;
            (function (Methods) {
            })(Methods = SetMycompanyService.Methods || (SetMycompanyService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetMycompanyService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetMycompanyService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetMycompanyService.baseUrl + '/' + x;
            });
        })(SetMycompanyService = PhoneBack.SetMycompanyService || (PhoneBack.SetMycompanyService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetPriorityticketForm = /** @class */ (function (_super) {
            __extends(SetPriorityticketForm, _super);
            function SetPriorityticketForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SetPriorityticketForm.formKey = 'PhoneBack.SetPriorityticket';
            return SetPriorityticketForm;
        }(Serenity.PrefixedContext));
        PhoneBack.SetPriorityticketForm = SetPriorityticketForm;
        [['DefaultValue', function () { return Serenity.BooleanEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['Caption', function () { return Serenity.StringEditor; }], ['Color', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SetPriorityticketForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetPriorityticketRow;
        (function (SetPriorityticketRow) {
            SetPriorityticketRow.idProperty = 'Id';
            SetPriorityticketRow.nameProperty = 'Caption';
            SetPriorityticketRow.localTextPrefix = 'PhoneBack.SetPriorityticket';
            SetPriorityticketRow.lookupKey = 'PhoneBack.SetPriorityticket';
            function getLookup() {
                return Q.getLookup('PhoneBack.SetPriorityticket');
            }
            SetPriorityticketRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SetPriorityticketRow.Fields || (SetPriorityticketRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Caption',
                'Color'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetPriorityticketRow = PhoneBack.SetPriorityticketRow || (PhoneBack.SetPriorityticketRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetPriorityticketService;
        (function (SetPriorityticketService) {
            SetPriorityticketService.baseUrl = 'PhoneBack/SetPriorityticket';
            var Methods;
            (function (Methods) {
            })(Methods = SetPriorityticketService.Methods || (SetPriorityticketService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetPriorityticketService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetPriorityticketService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetPriorityticketService.baseUrl + '/' + x;
            });
        })(SetPriorityticketService = PhoneBack.SetPriorityticketService || (PhoneBack.SetPriorityticketService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetTicketstatusForm = /** @class */ (function (_super) {
            __extends(SetTicketstatusForm, _super);
            function SetTicketstatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SetTicketstatusForm.formKey = 'PhoneBack.SetTicketstatus';
            return SetTicketstatusForm;
        }(Serenity.PrefixedContext));
        PhoneBack.SetTicketstatusForm = SetTicketstatusForm;
        [['DefaultValue', function () { return Serenity.BooleanEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['Caption', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SetTicketstatusForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetTicketstatusRow;
        (function (SetTicketstatusRow) {
            SetTicketstatusRow.idProperty = 'Id';
            SetTicketstatusRow.nameProperty = 'Caption';
            SetTicketstatusRow.localTextPrefix = 'PhoneBack.SetTicketstatus';
            SetTicketstatusRow.lookupKey = 'PhoneBack.SetTicketstatus';
            function getLookup() {
                return Q.getLookup('PhoneBack.SetTicketstatus');
            }
            SetTicketstatusRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SetTicketstatusRow.Fields || (SetTicketstatusRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Caption'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetTicketstatusRow = PhoneBack.SetTicketstatusRow || (PhoneBack.SetTicketstatusRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SetTicketstatusService;
        (function (SetTicketstatusService) {
            SetTicketstatusService.baseUrl = 'PhoneBack/SetTicketstatus';
            var Methods;
            (function (Methods) {
            })(Methods = SetTicketstatusService.Methods || (SetTicketstatusService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetTicketstatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetTicketstatusService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetTicketstatusService.baseUrl + '/' + x;
            });
        })(SetTicketstatusService = PhoneBack.SetTicketstatusService || (PhoneBack.SetTicketstatusService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SettSoftwareForm = /** @class */ (function (_super) {
            __extends(SettSoftwareForm, _super);
            function SettSoftwareForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SettSoftwareForm.formKey = 'PhoneBack.SettSoftware';
            return SettSoftwareForm;
        }(Serenity.PrefixedContext));
        PhoneBack.SettSoftwareForm = SettSoftwareForm;
        [['DefaultValue', function () { return Serenity.BooleanEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUsername', function () { return Serenity.StringEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUsername', function () { return Serenity.StringEditor; }], ['Setting', function () { return Serenity.StringEditor; }], ['Value', function () { return Serenity.StringEditor; }], ['Caption', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SettSoftwareForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SettSoftwareRow;
        (function (SettSoftwareRow) {
            SettSoftwareRow.idProperty = 'Id';
            SettSoftwareRow.nameProperty = 'Setting';
            SettSoftwareRow.localTextPrefix = 'PhoneBack.SettSoftware';
            SettSoftwareRow.lookupKey = 'PhoneBack.SettSoftware';
            function getLookup() {
                return Q.getLookup('PhoneBack.SettSoftware');
            }
            SettSoftwareRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SettSoftwareRow.Fields || (SettSoftwareRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Setting',
                'Value',
                'Caption',
                'InsertUsername',
                'UpdateUsername'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SettSoftwareRow = PhoneBack.SettSoftwareRow || (PhoneBack.SettSoftwareRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var SettSoftwareService;
        (function (SettSoftwareService) {
            SettSoftwareService.baseUrl = 'PhoneBack/SettSoftware';
            var Methods;
            (function (Methods) {
            })(Methods = SettSoftwareService.Methods || (SettSoftwareService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SettSoftwareService[x] = function (r, s, o) {
                    return Q.serviceRequest(SettSoftwareService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SettSoftwareService.baseUrl + '/' + x;
            });
        })(SettSoftwareService = PhoneBack.SettSoftwareService || (PhoneBack.SettSoftwareService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var TicketCommentForm = /** @class */ (function (_super) {
            __extends(TicketCommentForm, _super);
            function TicketCommentForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TicketCommentForm.formKey = 'PhoneBack.TicketComment';
            return TicketCommentForm;
        }(Serenity.PrefixedContext));
        PhoneBack.TicketCommentForm = TicketCommentForm;
        [['TicketId', function () { return Serenity.StringEditor; }], ['CreateDate', function () { return Serenity.DateEditor; }], ['CreateUserId', function () { return Serenity.IntegerEditor; }], ['IsPublic', function () { return Serenity.BooleanEditor; }], ['Comment', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TicketCommentForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var TicketCommentRow;
        (function (TicketCommentRow) {
            TicketCommentRow.idProperty = 'Id';
            TicketCommentRow.nameProperty = 'Comment';
            TicketCommentRow.localTextPrefix = 'PhoneBack.TicketComment';
            TicketCommentRow.lookupKey = 'PhoneBack.TicketComment';
            function getLookup() {
                return Q.getLookup('PhoneBack.TicketComment');
            }
            TicketCommentRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TicketCommentRow.Fields || (TicketCommentRow.Fields = {}));
            [
                'Id',
                'TicketId',
                'CreateDate',
                'CreateUserId',
                'IsPublic',
                'Comment'
            ].forEach(function (x) { return Fields[x] = x; });
        })(TicketCommentRow = PhoneBack.TicketCommentRow || (PhoneBack.TicketCommentRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var TicketCommentService;
        (function (TicketCommentService) {
            TicketCommentService.baseUrl = 'PhoneBack/TicketComment';
            var Methods;
            (function (Methods) {
            })(Methods = TicketCommentService.Methods || (TicketCommentService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TicketCommentService[x] = function (r, s, o) {
                    return Q.serviceRequest(TicketCommentService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TicketCommentService.baseUrl + '/' + x;
            });
        })(TicketCommentService = PhoneBack.TicketCommentService || (PhoneBack.TicketCommentService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var TicketForm = /** @class */ (function (_super) {
            __extends(TicketForm, _super);
            function TicketForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TicketForm.formKey = 'PhoneBack.Ticket';
            return TicketForm;
        }(Serenity.PrefixedContext));
        PhoneBack.TicketForm = TicketForm;
        [['CloseDate', function () { return Serenity.DateEditor; }], ['CloseUserId', function () { return Serenity.IntegerEditor; }], ['CreateDate', function () { return Serenity.DateEditor; }], ['CreateUsername', function () { return Serenity.StringEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUsername', function () { return Serenity.StringEditor; }], ['IdentityConsumer', function () { return Serenity.LookupEditor; }], ['Status', function () { return Serenity.LookupEditor; }], ['Priority', function () { return Serenity.LookupEditor; }], ['Category', function () { return Serenity.LookupEditor; }], ['ToUserId', function () { return Serenity.LookupEditor; }], ['Subject', function () { return Serenity.StringEditor; }], ['Object', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(TicketForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var TicketRow;
        (function (TicketRow) {
            TicketRow.idProperty = 'Id';
            TicketRow.nameProperty = 'Subject';
            TicketRow.localTextPrefix = 'PhoneBack.Ticket';
            TicketRow.lookupKey = 'PhoneBack.Ticket';
            function getLookup() {
                return Q.getLookup('PhoneBack.Ticket');
            }
            TicketRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TicketRow.Fields || (TicketRow.Fields = {}));
            [
                'Id',
                'IdentityConsumer',
                'CreateDate',
                'CreateUserId',
                'UpdateDate',
                'UpdateUserId',
                'CloseDate',
                'CloseUserId',
                'Status',
                'Priority',
                'Category',
                'ToUserId',
                'Subject',
                'Object',
                'IdentityConsumerSurname',
                'IdentityConsumerName',
                'IdentityConsumerMaidenName',
                'IdentityConsumerCorporateId',
                'IdentityConsumerSexe',
                'IdentityConsumerPhone',
                'IdentityConsumerGsm',
                'IdentityConsumerEmail1',
                'IdentityConsumerCaption',
                'StatusCaption',
                'PriorityCaption',
                'PriorityColor',
                'CategoryCaption',
                'ToUserUsername',
                'CreateUsername',
                'UpdateUsername',
                'CloseUsername',
                'Comment'
            ].forEach(function (x) { return Fields[x] = x; });
        })(TicketRow = PhoneBack.TicketRow || (PhoneBack.TicketRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var TicketService;
        (function (TicketService) {
            TicketService.baseUrl = 'PhoneBack/Ticket';
            var Methods;
            (function (Methods) {
            })(Methods = TicketService.Methods || (TicketService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TicketService[x] = function (r, s, o) {
                    return Q.serviceRequest(TicketService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TicketService.baseUrl + '/' + x;
            });
        })(TicketService = PhoneBack.TicketService || (PhoneBack.TicketService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var UsersForm = /** @class */ (function (_super) {
            __extends(UsersForm, _super);
            function UsersForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UsersForm.formKey = 'PhoneBack.Users';
            return UsersForm;
        }(Serenity.PrefixedContext));
        PhoneBack.UsersForm = UsersForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.StringEditor; }], ['Source', function () { return Serenity.StringEditor; }], ['PasswordHash', function () { return Serenity.StringEditor; }], ['PasswordSalt', function () { return Serenity.StringEditor; }], ['LastDirectoryUpdate', function () { return Serenity.DateEditor; }], ['UserImage', function () { return Serenity.StringEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['IsActive', function () { return Serenity.IntegerEditor; }], ['MyCompanyId', function () { return Serenity.LookupEditor; }], ['BusinessDivision', function () { return Serenity.LookupEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Gsm', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UsersForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var UsersRow;
        (function (UsersRow) {
            UsersRow.idProperty = 'UserId';
            UsersRow.nameProperty = 'Username';
            UsersRow.localTextPrefix = 'PhoneBack.Users';
            var Fields;
            (function (Fields) {
            })(Fields = UsersRow.Fields || (UsersRow.Fields = {}));
            [
                'UserId',
                'Username',
                'DisplayName',
                'Email',
                'Source',
                'PasswordHash',
                'PasswordSalt',
                'LastDirectoryUpdate',
                'UserImage',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'IsActive',
                'MyCompanyId',
                'BusinessDivision',
                'Phone',
                'Gsm',
                'MyCompanyIsActive',
                'MyCompanyIsArchive',
                'MyCompanyInsertDate',
                'MyCompanyInsertUserId',
                'MyCompanyUpdateDate',
                'MyCompanyUpdateUserId',
                'MyCompanyName',
                'MyCompanyPhone',
                'MyCompanyGsm',
                'MyCompanyEmail1',
                'MyCompanyAdress',
                'MyCompanyCity',
                'MyCompanyCountry',
                'MyCompanyCedex',
                'MyCompanyArchiveDate',
                'BusinessDivisionDefaultValue',
                'BusinessDivisionIsActive',
                'BusinessDivisionInsertDate',
                'BusinessDivisionInsertUserId',
                'BusinessDivisionUpdateDate',
                'BusinessDivisionUpdateUserId',
                'BusinessDivisionCaption'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UsersRow = PhoneBack.UsersRow || (PhoneBack.UsersRow = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
var PhoneBack_IIS;
(function (PhoneBack_IIS) {
    var PhoneBack;
    (function (PhoneBack) {
        var UsersService;
        (function (UsersService) {
            UsersService.baseUrl = 'PhoneBack/Users';
            var Methods;
            (function (Methods) {
            })(Methods = UsersService.Methods || (UsersService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UsersService[x] = function (r, s, o) {
                    return Q.serviceRequest(UsersService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UsersService.baseUrl + '/' + x;
            });
        })(UsersService = PhoneBack.UsersService || (PhoneBack.UsersService = {}));
    })(PhoneBack = PhoneBack_IIS.PhoneBack || (PhoneBack_IIS.PhoneBack = {}));
})(PhoneBack_IIS || (PhoneBack_IIS = {}));
//# sourceMappingURL=PhoneBack_IIS.Web.js.map