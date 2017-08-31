var seleniumWebdriver = require('selenium-webdriver');
const {By, Key, until} = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
const LoadPage = require('../page-objects/load_page');
const HomePage = require('../page-objects/home_page');
const RegistratonPage = require('../page-objects/registration_page');
const DragPage = require('../page-objects/dragging_elements_page')


defineSupportCode(function ({Given, When, Then, And, setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);


    var dragpage;

    When(/^I click on the draggable button$/, function () {
        dragpage = new DragPage(this.driver);
        dragpage.clickOnDragElements();
    });

    Then(/^I am navigated to the draggable page$/, function () {
        dragpage.wait(2000);
    });

    When(/^I can drag and drop an element$/, function () {
        dragpage.dragAnElementByCoordinates();
        dragpage.wait(2000)
    });


    When(/^I select (.*) from the list$/, function(element) {

        switch(element) {
            case 'draggable':
                dragpage.clickOnConstrainMovementListItem();
                break;
            case 'draggable_and_sortable':
                dragpage.clickOnDraggableAndSortable()
                break;
            default:
                console.log('Logging what has happened here')
        }
    });

    When(/^I am able to drag and drop and sort a list$/, function () {
        dragpage.clickOnDraggableAndSortable();
    });

});



