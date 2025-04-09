using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using ECommerceApp.Models;

namespace ECommerceApp
{
    /// <summary>
    /// Interaction logic for ProductAddWindow.xaml
    /// </summary>
    public partial class ProductAddWindow : Window
    {
        public ProductAddWindow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            var product = new Product()
            { 
                Name = ProductNameBox.Text,
                Price = PriceBox.Text,
                Quantity = QuantityBox.Text
            };
            App.Db.Products.Add(product);
            App.Db.SaveChanges();
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void CloseButton_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}
