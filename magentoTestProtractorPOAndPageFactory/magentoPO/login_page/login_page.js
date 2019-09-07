const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");

class LoginPage extends BasePage {
    constructor() {
        super();
        this.userName = new Element("css", "#username");
        this.password = new Element("css", "#login");
        this.signIn = new Element("css", ".actions .action-primary");
        this.loggedInUrl = "http://magento.loc/admin/admin/dashboard/"
    };
    open() {
        return super.open("http://magento.loc/admin/login");
    };
    async loginAsAdmin(userName, password) {
        await super.open(this.loggedInUrl);
        const url = await super.getCurrentUrl();
        if (url != this.loggedInUrl) {
            await this.open();
            await this.userName.sendKeys(userName);
            await this.password.sendKeys(password);
            return this.signIn.click();     
        }
    }
};

module.exports = LoginPage;