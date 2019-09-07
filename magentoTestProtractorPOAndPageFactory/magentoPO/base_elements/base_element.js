class Element {
    constructor(selectorType, selector) {
        switch(selectorType){
            case "css":
                this.elem = element(by.css(selector));
                break;
            case "xpath":
                this.elem = element(by.xpath(selector));
                break;
            default:
                this.elem = element(by.xpath(selector));
        }    
    }
    click() {
        console.log("this in base_element " + typeof this);
        return this.elem.click();
    };
    sendKeys(keysToSend) {
        return this.elem.sendKeys(keysToSend);
    }
};

module.exports = Element;