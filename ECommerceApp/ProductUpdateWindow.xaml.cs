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
    /// Interaction logic for ProductUpdateWindow.xaml
    /// </summary>
    public partial class ProductUpdateWindow : Window
    {
        private int Id {  get; set; }
        private Product Product { get; set; }
        public ProductUpdateWindow(int id)
        {
            InitializeComponent();
            Id = id;
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            Product = App.Db.Products.ToList().Find(x => x.Id == Id)!;
            ProductNameBox.Text = Product.Name;
            PriceBox.Text = Product.Price;
            QuantityBox.Text = Product.Quantity;
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Product.Name = ProductNameBox.Text;
            Product.Price = PriceBox.Text;
            Product.Quantity = QuantityBox.Text;
            
            App.Db.Products.Update(Product);
            Close();
        }
    }
}
