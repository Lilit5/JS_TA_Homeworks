const PageFactory = require("./magentoPO/pageFactory");
// const BasePage = require("./magentoPO/base_page/base_page");
const EC = protractor.ExpectedConditions;

const LoginPage = PageFactory.getPage("Login");
const ProductEditPage = PageFactory.getPage("Product Edit");

async function createProduct(prodName, prodPrice) {
    // const currentPage = PageFactory.getPage();
    // console.log(currentPage);
    // await currentPage.Header.openProductsPage();

    await PageFactory.getPage().Header.openProductsPage();
    // const bp = new BasePage();
    // const h = new bp.Header();
    // await h.openProductsPage();
    const ProductsGridPage = PageFactory.getPage("Products Grid");
    await ProductsGridPage.createSimpleProduct();
    return ProductEditPage.fillProductForm(prodName, prodPrice);
}

describe('magento', function() {    

    // async function logout(){
    //     await loggedInUserName.click();
    //     return signOut.click();
    // }

    beforeEach(async function() {
        return browser.ignoreSynchronization=true;
    });
    
    it('should login successfully', async function() {
      await LoginPage.loginAsAdmin('admin', 'lilit1234');
      expect(LoginPage.getCurrentUrl()).toEqual(LoginPage.loggedInUrl);
    });
    
    it('should create simple product',async function() {
        await createProduct("simple_product", "123");
        // await ProductEditPage.waitForElementVisible(ProductEditPage.productNameLable, 5000);
        // await ProductsGridPage.open();
        // await ProductsGridPage.waitForElementVisible(productInGrid, 5000);
        // expect(ProductsGridPage.createdProductsCount.count()).toBeGreaterThan(1);
    });

    // it('should create simple product',async function(){
    //     await createSimpleProduct("simple_product", "123");
    //     await browser.wait(EC.visibilityOf(productNameLable), 5000);
    //     await browser.get("http://magento.loc/admin/catalog/product/");
    //     await browser.wait(EC.visibilityOf(productInGrid), 5000);
    //     expect(createdProductsCount.count()).toBeGreaterThan(1);
    // });

    // it('should logout successfully', async function(){
    //     await logout();
    //     expect(browser.getCurrentUrl()).toEqual("http://magento.loc/admin/admin/");
   // });
  });