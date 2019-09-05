// spec.js
const EC = protractor.ExpectedConditions;
describe('magento', function() {
    const userName = element(by.id('username')); 
    const password = element(by.id('login')); 
    const signIn = element(by.css('.actions .action-primary')); 
    const catalog = element(by.id('menu-magento-catalog-catalog'));
    const products = element(by.xpath("//li[@data-ui-id='menu-magento-catalog-inventory']//span[contains(text(),'Products')]//.."));
    const productTypeToggle = element(by.xpath("//button[contains(@class,'action-toggle')]"));
    const simpleProduct = element(by.xpath("//span[contains(text(),'Simple Product')]"));
    const productName = element(by.xpath("//input[@name='product[name]']"));
    const productPrice = element(by.xpath("//input[@name='product[price]']"));
    const saveButton = element(by.css("#save-button"));
    const productNameLable = element(by.xpath("//h1[contains(text(),'simple_product')]"));
    const createdProductsCount = element.all(by.xpath("//table[contains(@class,'data-grid-draggable') and @data-role='grid']//tr"));
    const loggedInUserName = element(by.xpath("//div[contains(@class,'admin-user')]"));
    const signOut = element(by.xpath("//a[contains(text(),'Sign Out')]"));
    const productInGrid = element(by.xpath("//td/div[contains(text(),'simple_product')]"));
    
    async function login(userNameParam, passwordParam) {
      await browser.get('http://magento.loc/admin/login');
      await userName.sendKeys(userNameParam);
      await password.sendKeys(passwordParam);
      return signIn.click();
    }
    
    async function createSimpleProduct(prodName, prodPrice){
        await catalog.click();
        await products.click();
        await browser.wait(EC.visibilityOf(productTypeToggle), 5000);
        await productTypeToggle.click();
        await browser.wait(EC.visibilityOf(simpleProduct), 5000);
        await simpleProduct.click();
        await browser.wait(EC.visibilityOf(productName), 3000);
        await productName.sendKeys(prodName);
        await productPrice.sendKeys(prodPrice);
        return saveButton.click();
    }

    async function logout(){
        await loggedInUserName.click();
        return signOut.click();
    }

    beforeEach(function() {
        return browser.ignoreSynchronization=true;
    });
    
    it('should login successfully', async function() {
      await login('admin', 'lilit1234');
      expect(browser.getCurrentUrl()).toEqual("http://magento.loc/admin/admin/dashboard/");
    });
    
    it('should create simple product',async function(){
        await createSimpleProduct("simple_product", "123");
        await browser.wait(EC.visibilityOf(productNameLable), 5000);
        await browser.get("http://magento.loc/admin/catalog/product/");
        await browser.wait(EC.visibilityOf(productInGrid), 5000);
        expect(createdProductsCount.count()).toBeGreaterThan(1);
    });

    it('should logout successfully', async function(){
        await logout();
        expect(browser.getCurrentUrl()).toEqual("http://magento.loc/admin/admin/");

    });
  });