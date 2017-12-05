
using Serenity.ComponentModel;
using System.ComponentModel;

namespace PhoneBack_IIS.PhoneBack
{
        [EnumKey("PhoneBack.Gender")]
        public enum Gender
        {
            [Description("Male")]
            Male = 1,
            [Description("Female")]
            Female = 2
        }
}