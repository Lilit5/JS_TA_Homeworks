class Collection {
    constructor(selectorType, selector) {
        switch(selectorType){
            case "css":
                this.collection = element.all(by.css(selector));
            case "xpath":
                this.collection = element.all(by.xpath(selector));
            default:
                this.collection = element.all(by.xpath(selector));
        }    
    }
    getCount() {
        return this.collection.count();
    };
};

module.exports = Collection;