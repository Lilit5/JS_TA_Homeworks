const webdriver = require("selenium-webdriver");

function createDriver() {
    const driver = new webdriver.Builder()
        .usingServer("http://localhost:4444/wd/hub")
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    driver.manage().timeouts().setScriptTimeout(10000);
    return driver;
}

const browser = createDriver();

function closeBrowser(){
    browser.quit();
}

function login() {
    browser.findElement(webdriver.By.id('username')).sendKeys('admin')
       .then(() => browser.findElement(webdriver.By.id('login')).sendKeys('lilit1234'))
        .then(() =>browser.findElement(webdriver.By.css('.actions .action-primary')).click());

}

async function createSimpleProduct() {
    await browser.findElement(webdriver.By.id("menu-magento-catalog-catalog")).click();
    await browser.findElement(webdriver.By.xpath("//li[@data-ui-id='menu-magento-catalog-inventory']//span[contains(text(),'Products')]//..")).click();
    await browser.sleep(2000);
    await browser.findElement(webdriver.By.xpath("//button[contains(@class,'action-toggle')]")).click();
    await browser.findElement(webdriver.By.xpath("//span[contains(text(),'Simple Product')]")).click();
    await browser.sleep(2000);
    await browser.findElement(webdriver.By.xpath("//input[@name='product[name]']")).sendKeys('simple_product');
    await browser.findElement(webdriver.By.xpath("//input[@name='product[price]']")).sendKeys('123');
    await browser.findElement(webdriver.By.css("#save-button")).click();
    await browser.sleep(2000);
}
async function logout() {
    await browser.findElement(webdriver.By.xpath("//div[contains(@class,'admin-user')]")).click();
    await browser.findElement(webdriver.By.xpath("//a[contains(text(),'Sign Out')]")).click();
}


browser.get('http://magento.loc/admin/login')
    .then(login)
    .then(createSimpleProduct)
    .then(logout)
    .then(closeBrowser);