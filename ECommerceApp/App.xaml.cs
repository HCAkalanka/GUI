using System.Configuration;
using System.Data;
using System.Windows;
using ECommerceApp.Models;

namespace ECommerceApp
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        public static AppDbContext Db {  get; set; } = new();
    }

}
