var seleniumWebdriver = require('selenium-webdriver');
const {By, Key, until} = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');


defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);


    Given(/^I am on the front page$/, function () {
        var getURL = this.driver.get('http://demoqa.com/');
        var checkPageTitle = this.driver.getTitle().then(function (title) {
            console.log('Page title is: ' + title);
            //check title text and compare
        });

    });

    When(/^I enter my registration details$/, function () {
        var registrationButton = this.driver.findElement(By.className('menu-item-374')).click()

        var enterFirstName = this.driver.findElement(By.id('name_3_firstname'))
        enterFirstName.click()
        enterFirstName.clear()
        var text123 = enterFirstName.sendKeys('First' + Math.random().toString(36).substr(2, 5))

        //randomised first and last names to avoid duplications
        var enterLastName = this.driver.findElement(By.id('name_3_lastname'))
        enterLastName.click()
        enterLastName.clear()
        enterLastName.sendKeys('Last' + Math.random().toString(36).substr(2, 5))

        //selecting Single as martial ststus
        //todo: create tests for selecting another one/ or randomise
        var selectMaritalStatusRadioButton = this.driver.findElement(By.name('radio_4[]'))
        selectMaritalStatusRadioButton.click()

        //todo: check if the correct hobby has been selected?
        var selectHobby = this.driver.findElement(By.name('checkbox_5[]'))
        selectHobby.click()


        //Dropdown selections
        var selectCountryFromDropdownList = this.driver.findElement(By.id('dropdown_7'))
        selectCountryFromDropdownList.click()

        //Option 1: selects the first country starting with H.
        // selectCountryFromDropdownList.sendKeys('H')

        //Option2: Use the index number. The 26th element happens to be Brazil
        selectCountryFromDropdownList.findElement(By.css('#dropdown_7>option:nth-child(26)')).click();

        //but this approach needs verification whether the selection is the expected
        var element = selectCountryFromDropdownList.findElement(By.css('#dropdown_7>option:nth-child(26)'))

        if (element != 'Brazil') {
            console.log('Something went wrong with the selection, the country is not Brazil')
        }

        var selectDOBMonth = this.driver.findElement(By.id('mm_date_8')).sendKeys('1')

        var selectDOBDay = this.driver.findElement(By.id('dd_date_8')).sendKeys('9')

        var selectDOBYear = this.driver.findElement(By.id('yy_date_8')).sendKeys('1999')


        function randomisePhoneNumber() {
            var min = 1000000000;
            var max = 9999999999;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var enterPhoneNumber = this.driver.findElement(By.id('phone_9'))
        enterPhoneNumber.sendKeys(randomisePhoneNumber())

        function randomiseUsername() {
            return 'Test' + Math.random().toString(36).substr(2, 5)
        }

        var enterUsername = this.driver.findElement(By.id('username'))
        enterUsername.sendKeys(randomiseUsername())

        function createEmailAddress() {
            return Math.random().toString(36).substr(2, 5) + '@example.com'
        }

        //ideally use firstname + example.com
        var enterEmailAddress = this.driver.findElement(By.id('email_1'))
        enterEmailAddress.sendKeys(createEmailAddress())


        var enterPassword = this.driver.findElement(By.id('password_2'))
        enterPassword.sendKeys('password123')

        var enterConfirmPassword = this.driver.findElement(By.id('confirm_password_password_2'))
        enterConfirmPassword.sendKeys('password123')


    });

    When(/^I submit my registration request$/, function () {
        var submitRegistration = this.driver.findElement(By.name('pie_submit'))
        submitRegistration.click()

    });

    Then(/^I am registered$/, function () {
        var confirmUserHasBeenRegistered = this.driver.findElement(By.className('piereg_message'))

        confirmUserHasBeenRegistered.getText('piereg_message').then(function (textofreg) {
            console.log('User has been registered indeed,here is proof: ' + textofreg);
        });
    });


});
