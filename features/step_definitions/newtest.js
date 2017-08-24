// var seleniumWebdriver = require('selenium-webdriver');
// const {By, Key, until} = require('selenium-webdriver');
// var {defineSupportCode} = require('cucumber');
//
//
// defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
//     setDefaultTimeout(60 * 1000);
//
//
//     Given(/^I am on the front page$/, function () {
//         var getURL = this.driver.get('http://facebook.com');
//         // var checkPageTitle = this.driver.getTitle().then(function (title) {
//         //     console.log('Page title is: ' + title);
//         //     //check title text and compare
//         // });
//
//     });
//
//     When(/^I enter my registration details$/, function () {
//         // this.driver.findElement(By.className('inputtext'))
//         // this.driver.wait(until.elementIsVisible('email'), 100);
//         var test123 = this.driver.findElement(By.id('email'))
//         test123.click()
//         test123.clear()
//         test123.sendKeys('testdia@test.com')
//         var pass = this.driver.findElement(By.id('pass'))
//         pass.sendKeys('password123')
//
//         // var emailStuff = this.driver.findElement(By.id('email_create'))
//         // emailStuff.click()
//         //  emailStuff.clear()
//         //  emailStuff.sendKeys('testdia@test.com')
//
//
//
//         // this.driver.findElement(By.id('passwd')).sendKeys('password123')
//
//     });
// });