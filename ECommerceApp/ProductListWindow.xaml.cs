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
    /// Interaction logic for ProductListWindow.xaml
    /// </summary>
    public partial class ProductListWindow : Window
    {
        public void Reload()
        {
            ProductDataGrid.ItemsSource = App.Db.Products.ToList();
        }

        public int? SelectedId()
        {
            var product = ProductDataGrid.SelectedItem as Product;
            if (product != null)
            {
                return product.Id;
            }
            else
            {
                return null;
            }
        }
        public ProductListWindow()
        {
            InitializeComponent();
            Reload();
        }

        private void AddBtn_Click(object sender, RoutedEventArgs e)
        {
            new ProductAddWindow().ShowDialog();
            Reload();
        }

        private void UpdateBtn_Click(object sender, RoutedEventArgs e)
        {
            var Id = SelectedId();
            if (Id != null) { 
                new ProductUpdateWindow((int)Id).ShowDialog();
                Reload();
            }
        }

        private void DeleteBtn_Click(object sender, RoutedEventArgs e)
        {
            var Id = SelectedId();
            if (Id != null)
            {
                
                var product = App.Db.Products.ToList().Find(x => x.Id == Id)!;
                App.Db.Products.Remove(product);
                App.Db.SaveChanges();
                Reload();
            }
        }
    }
}
