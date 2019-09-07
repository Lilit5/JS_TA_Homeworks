const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");

class ProductEditPage extends BasePage {
    constructor() {
        super();
        this.productName = new Element("xpath", "//input[@name='product[name]']");
        this.productPrice = new Element("xpath", "//input[@name='product[price]']");
        this.saveButton = new Element("css", "#save-button");
        this.productNameLable = new Element("xpath", "//h1[contains(text(),'simple_product')]");
    };
    async fillProductForm (prodName, prodPrice) {
        await super.waitForElementVisible(this.productName, 3000);
        await this.productName.sendKeys(prodName);
        await this.productPrice.sendKeys(prodPrice);
        return this.saveButton.click();
    };
};

module.exports = ProductEditPage;