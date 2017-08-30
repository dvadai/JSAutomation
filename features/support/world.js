
// To bring context to each Scenario, you can use the World constructor within which you can
// define various properties and methods that may be relevant in setting up the environment under test for each Scenario.
// Additonally, you access the defined World
// within each Step using the this keyword - just as you are familiar to in referencing context scope within JavaScript.


// This file defines the World constructor on the module.exports and, when is invoked
// by CucumberJS, is provided a callback delegate that you invoke when you are done "prepping" your World context.

require('chromedriver')
require('geckodriver')
require('chai')

var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

var configStuff = require('./configExample.json')


this.waitForElement = function(locator) {
    var condition = seleniumWebdriver.until.elementLocated(locator);
    return this.driver.wait(condition)
}

//It is possible to set specific configuration for browsers to be tested in the constructor
//Like: version and OS: forBrowser('firefox', '46', 'MAC')
function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser(configStuff.browser)
        .build();
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
})
