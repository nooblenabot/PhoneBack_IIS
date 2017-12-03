using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class PhoneBack
        {
            public static class Consumer
            {
                public const string ConsumerIndex = "~/Modules/PhoneBack/Consumer/ConsumerIndex.cshtml";
            }

            public static class Person
            {
                public const string PersonIndex = "~/Modules/PhoneBack/Person/PersonIndex.cshtml";
            }

            public static class SetBussdiv
            {
                public const string SetBussdivIndex = "~/Modules/PhoneBack/SetBussdiv/SetBussdivIndex.cshtml";
            }

            public static class SetCatgticket
            {
                public const string SetCatgticketIndex = "~/Modules/PhoneBack/SetCatgticket/SetCatgticketIndex.cshtml";
            }

            public static class SetCity
            {
                public const string SetCityIndex = "~/Modules/PhoneBack/SetCity/SetCityIndex.cshtml";
            }

            public static class SetConsumerstatus
            {
                public const string SetConsumerstatusIndex = "~/Modules/PhoneBack/SetConsumerstatus/SetConsumerstatusIndex.cshtml";
            }

            public static class SetCountry
            {
                public const string SetCountryIndex = "~/Modules/PhoneBack/SetCountry/SetCountryIndex.cshtml";
            }

            public static class SetMycompany
            {
                public const string SetMycompanyIndex = "~/Modules/PhoneBack/SetMycompany/SetMycompanyIndex.cshtml";
            }

            public static class SetPriorityticket
            {
                public const string SetPriorityticketIndex = "~/Modules/PhoneBack/SetPriorityticket/SetPriorityticketIndex.cshtml";
            }

            public static class SetTicketstatus
            {
                public const string SetTicketstatusIndex = "~/Modules/PhoneBack/SetTicketstatus/SetTicketstatusIndex.cshtml";
            }

            public static class SettSoftware
            {
                public const string SettSoftwareIndex = "~/Modules/PhoneBack/SettSoftware/SettSoftwareIndex.cshtml";
            }

            public static class Ticket
            {
                public const string TicketIndex = "~/Modules/PhoneBack/Ticket/TicketIndex.cshtml";
            }

            public static class TicketComment
            {
                public const string TicketCommentIndex = "~/Modules/PhoneBack/TicketComment/TicketCommentIndex.cshtml";
            }

            public static class Users
            {
                public const string UsersIndex = "~/Modules/PhoneBack/Users/UsersIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}

