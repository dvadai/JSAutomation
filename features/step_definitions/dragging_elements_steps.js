var seleniumWebdriver = require('selenium-webdriver');
const {By, Key, until} = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
const LoadPage = require('../page-objects/load_page');
const HomePage = require('../page-objects/home_page');
const RegistratonPage = require('../page-objects/registration_page');
const DragPage = require('../page-objects/dragging_elements_page')


defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);


    var dragpage;

    When(/^I click on the drag button$/, function () {
        dragpage = new DragPage(this.driver);
        dragpage.clickOnDragElements();
        dragpage.clickOnSecondElementinList();

    });

    Then(/^I am navigated to the draggable page$/, function () {
        dragpage.dragAnElementUp();
    });
})




