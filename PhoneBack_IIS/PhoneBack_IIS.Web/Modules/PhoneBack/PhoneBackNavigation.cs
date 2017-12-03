using Serenity.Navigation;
using MyPages = PhoneBack_IIS.PhoneBack.Pages;

[assembly: NavigationLink(int.MaxValue, "PhoneBack/Consumer", typeof(MyPages.ConsumerController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Person", typeof(MyPages.PersonController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Set Bussdiv", typeof(MyPages.SetBussdivController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Set Catgticket", typeof(MyPages.SetCatgticketController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Set City", typeof(MyPages.SetCityController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Set Consumerstatus", typeof(MyPages.SetConsumerstatusController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Set Country", typeof(MyPages.SetCountryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Set Mycompany", typeof(MyPages.SetMycompanyController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Set Priorityticket", typeof(MyPages.SetPriorityticketController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Set Ticketstatus", typeof(MyPages.SetTicketstatusController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Sett Software", typeof(MyPages.SettSoftwareController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Ticket", typeof(MyPages.TicketController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Ticket Comment", typeof(MyPages.TicketCommentController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PhoneBack/Users", typeof(MyPages.UsersController), icon: null)]