using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using ECommerceApp.Models;

namespace ECommerceApp
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        public void ProductsPage()
        {
            new ProductListWindow().Show();
            Close();
        }

        private void RegisterBtn_Click(object sender, RoutedEventArgs e)
        {
            var user = new User()
            {
                Username = UsernameBox.Text,
                Password = PasswordBox.Password
            };

            try
            {
                App.Db.Users.Add(user);
                App.Db.SaveChanges();
                MessageBox.Show("User Created Successfully!", "INFO", MessageBoxButton.OK, MessageBoxImage.Information);
                ProductsPage();
            }
            catch (Exception ex) {
                MessageBox.Show("User Already Exists!", "ERROR", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void LoginBtn_Click(object sender, RoutedEventArgs e)
        {
            var user = App.Db.Users.ToList().Find(u => u.Username == UsernameBox.Text &&  u.Password == PasswordBox.Password);
            if (user != null) {
                MessageBox.Show("Logged In Successfully!", "INFO", MessageBoxButton.OK, MessageBoxImage.Information);
                ProductsPage();
            } else
            {
                MessageBox.Show("Incorrect Username or Password!", "ERROR", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void Border_MouseLeftButtonDown(object sender, MouseButtonEventArgs e)
        {
            if (e.LeftButton == MouseButtonState.Pressed)
            {
                this.DragMove();
            }
        }
    }
}