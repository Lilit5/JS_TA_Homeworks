const Element = require("../base_elements/base_element");

class Header {
    constructor() {
        this.catalogButton = new Element("css","#menu-magento-catalog-catalog");
        this.productsButton = new Element("xpath", "//li[@data-ui-id='menu-magento-catalog-inventory']//span[contains(text(),'Products')]//..");
    };
    async openProductsPage() {
        await this.catalogButton.click();
        return this.productsButton.click();
    };
};

module.exports = Header;