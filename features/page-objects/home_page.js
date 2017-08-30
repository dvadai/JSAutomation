const {By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;
const Page = require('./load_page');

class HomePage extends Page {
    constructor(driver) {
        super(driver);
        this.URL = 'http://demoqa.com/';
        this.page_title = "Demoqa | Just another WordPress site";
    }

    register() {
        this.driver.findElement(By.className('menu-item-374')).click()
    }
};


module.exports = HomePage;