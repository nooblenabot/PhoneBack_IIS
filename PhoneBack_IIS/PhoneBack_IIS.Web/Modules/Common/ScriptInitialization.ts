/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace PhoneBack_IIS.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('PhoneBack_IIS');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}