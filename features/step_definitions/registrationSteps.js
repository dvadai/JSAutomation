var seleniumWebdriver = require('selenium-webdriver');
const {By, Key, until} = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
const LoadPage = require('../page-objects/load_page');
const HomePage = require('../page-objects/home_page');
const RegistratonPage = require('../page-objects/registration_page');


defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);

    var homepage;
    var regpage;


    Given(/^I am on the front page$/, function () {
        homepage = new HomePage(this.driver);
        homepage.open();
        homepage.verifyTitle();

    });

    When(/^I enter my registration details$/, function () {
        homepage.register();
        regpage = new RegistratonPage(this.driver);
        regpage.verifyURL();
        regpage.enterFirstName('First' + Math.random().toString(36).substr(2, 5));
        regpage.enterLastName('Last' + Math.random().toString(36).substr(2, 5))
        regpage.selectMaritalStatus();
        regpage.selectHobby();
        regpage.selectCountryFromDropdownList();
        regpage.selectDOB();
        regpage.enterRandomPhoneNumber();
        regpage.enterRandomUsername();
        regpage.enterRandomEmailAddress();
        regpage.enterPassword();
        regpage.confirmPassword();


    });

    When(/^I submit my registration request$/, function () {
        regpage = new RegistratonPage(this.driver);
        regpage.pressSubmitButton();

    });

    Then(/^I am registered$/, function () {
        regpage = new RegistratonPage(this.driver);
        regpage.checkIfUserHasBeenRegistered();
    });


});

