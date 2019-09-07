const Header = require('./header');
const Element = require('../base_elements/base_element');
const EC = protractor.ExpectedConditions;

class BasePage {
    constructor(){
        this.Header = new Header();
        this.loggedInUserName = new Element("xpath","//div[contains(@class,'admin-user')]");
        this.signOut = new Element("xpath", "//a[contains(text(),'Sign Out')]");
    };
    wait(waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    };
    waitForElementVisible(selector, miliseconds) {
        return browser.wait(EC.visibilityOf(selector), miliseconds);
    }
    getCurrentUrl() {
        return browser.getCurrentUrl();
    };
    open(url) {
        return browser.get(url);
    };

};

module.exports = BasePage;