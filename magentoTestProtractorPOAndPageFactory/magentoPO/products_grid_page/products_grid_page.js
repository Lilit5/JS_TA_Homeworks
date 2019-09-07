const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class ProductsGridPage extends BasePage {
    constructor() {
        super();
        this.productTypeToggle = new Element("xpath", "//button[contains(@class,'action-toggle')]");
        this.simpleProduct = new Element("xpath", "//span[contains(text(),'Simple Product')]");
        this.createdProducts = new Collection("xpath", "//table[contains(@class,'data-grid-draggable') and @data-role='grid']//tr");
        this.productInGrid = new Element("xpath", "//td/div[contains(text(),'simple_product')]");
    };
    open() {
        return super.open("http://magento.loc/admin/catalog/product");
    };
    async createSimpleProduct() {
        await super.waitForElementVisible(this.productTypeToggle, 5000);
        await this.productTypeToggle.click();
        await super.waitForElementVisible(this.simpleProduct, 5000);
        return this.simpleProduct.click();
    }
};

module.exports = ProductsGridPage;