const BasePage = require("./base_page/base_page");
const LoginPage = require("./login_page/login_page");
const ProductEditPage = require("./product_edit_page/product_edit_page");
const ProductsGridPage = require("./products_grid_page/products_grid_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Login":
                return new LoginPage();
            case "Product Edit":
                return new ProductEditPage();
            case "Products Grid":
                return new ProductsGridPage();
            default:
                return new BasePage();
        };
    };
};

module.exports = PageFactory;