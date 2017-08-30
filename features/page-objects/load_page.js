const {By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;

class Page {
    constructor(driver) {
        this.driver = driver;
        this.URL = "URL not set";
        this.page_title = "expected title not known";
    }

    open() {
        this.driver.get(this.URL);
    }

    verifyURL() {
        var expectedURL = this.URL;
        this.driver.getCurrentUrl().then(function(url) {
            expect(url).to.equal(expectedURL);
        });
    }

    verifyTitle() {
        var expectedTitle = this.page_title
        this.driver.getTitle().then(function (title) {
            console.log('Page title is: ' + title);
            expect(title).to.equal(expectedTitle);
        });
    }
}

module.exports = Page, expect;