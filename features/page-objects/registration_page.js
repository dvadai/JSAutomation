const {By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;
const Page = require('./load_page');


class RegistrationPage extends Page {
    constructor(driver) {
        super(driver);
        this.URL = "http://demoqa.com/registration/";
    }



    enterFirstName(name) {
        var enterFirstName = this.driver.findElement(By.id('name_3_firstname'))
        enterFirstName.click()
        enterFirstName.clear()
        enterFirstName.sendKeys(name)
    }

    enterLastName(name) {
        var enterLastName = this.driver.findElement(By.id('name_3_lastname'))
        enterLastName.click()
        enterLastName.clear()
        enterLastName.sendKeys(name)
    }

    selectMaritalStatus() {
        var selectMaritalStatusRadioButton = this.driver.findElement(By.name('radio_4[]'))
        selectMaritalStatusRadioButton.click()
    }

    selectHobby() {
        var selectHobby = this.driver.findElement(By.name('checkbox_5[]'))
        selectHobby.click()
    }

    selectCountryFromDropdownList() {
        //Option 1: selects the first country starting with H.
        // selectCountryFromDropdownList.sendKeys('H')
        //Option2: Use the index number. The 26th element happens to be Brazil
        var selectCountryFromDropdownList = this.driver.findElement(By.id('dropdown_7'))
        selectCountryFromDropdownList.click()
        selectCountryFromDropdownList.findElement(By.css('#dropdown_7>option:nth-child(26)')).click();

        //but this approach needs verification whether the selection is the expected
        var country = selectCountryFromDropdownList.findElement(By.css('#dropdown_7>option:nth-child(26)'))

        function getCountry() {
            country.getText().then(function (text) {
                console.log('Country is \'' + text + '\'');
                if (text != 'Brazil') {

                    return 'There was an issue'
                }
            });
        }

        getCountry();
    }


    selectDOB() {

        var selectDOBMonth = this.driver.findElement(By.id('mm_date_8')).sendKeys('1')
        var selectDOBDay = this.driver.findElement(By.id('dd_date_8')).sendKeys('9')
        var selectDOBYear = this.driver.findElement(By.id('yy_date_8')).sendKeys('1999')
    }

    enterRandomPhoneNumber() {
        //In order to avoid duplications, phone numbers are randoomised. It has to be min 10 digits
        function randomisePhoneNumber() {
            var min = 1000000000;
            var max = 9999999999;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var enterPhoneNumber = this.driver.findElement(By.id('phone_9'))
        enterPhoneNumber.sendKeys(randomisePhoneNumber())
    }

    enterRandomUsername() {
        function randomiseUsername() {
            return 'Test' + Math.random().toString(36).substr(2, 5)
        }

        var enterUsername = this.driver.findElement(By.id('username'))
        enterUsername.sendKeys(randomiseUsername())
    }


    enterRandomEmailAddress() {
        function createEmailAddress() {
            return Math.random().toString(36).substr(2, 5) + '@example.com'
        }

        //ideally use firstname + example.com
        var enterEmailAddress = this.driver.findElement(By.id('email_1'))
        enterEmailAddress.sendKeys(createEmailAddress())
    }

    enterPassword() {

        var enterPassword = this.driver.findElement(By.id('password_2'))
        enterPassword.sendKeys('password123')
    }


    confirmPassword() {

        var enterConfirmPassword = this.driver.findElement(By.id('confirm_password_password_2'))
        enterConfirmPassword.sendKeys('password123')
    }


    pressSubmitButton() {
        this.driver.sleep(2000)
        var submitRegistration = this.driver.findElement(By.name('pie_submit'))

        submitRegistration.click()
    }

    checkIfUserHasBeenRegistered() {
        var confirmUserHasBeenRegistered = this.driver.findElement(By.className('piereg_message'))

        confirmUserHasBeenRegistered.getText('piereg_message').then(function (textofreg) {
            console.log('User has been registered indeed,here is proof: ' + textofreg);
        });
    }


};
module.exports = RegistrationPage;
