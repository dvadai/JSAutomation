# Javascript Web Automation


Selenium test automation framework using Javascript. A few sample tests and with description on how to set it up from scratch.
This framework uses:
- Cucumber
- Selenium-webdriver
- chromedriver & firefoxdriver
- Assertions: chai

If you are a bit unsure about the products out there available, you can check out this repo:
https://github.com/atinfo/awesome-test-automation/blob/master/javascript-test-automation.md

test website used: http://demoqa.com/


# The Basics
# 1. Prerequisites
Follow the setup instructions mentioned here: https://github.com/cucumber/cucumber-js/blob/master/docs/nodejs_example.md
Additionally get any other driver you will use like geckodriver.
# 1. The project structure
The main directory is the Features, everything is under this.
Features(dir)
    - my.feature
    - step_definitions(dir)
            - my_steps.js
            - hooks.js
    - support(dir)
            - world.js
            -configInfo.json(this could be located in the root too)

# 2. {defineSupportCode} and Before and After hooks
These should be defined in the hooks.js
Depending on the project structure, you can use tagged hooks, or hooks that need to setup/teardown with every single test. 
More information: 
https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md
Hooks need to be written into the {defineSupportCode} method. 

# 3. Crossbrowser testing
There are multiple options to achieve this, depending the project and goal, here are some options. 

**Option1:** you just manually change the String when you would like to change the browser
Add your drivers to the world.js as per the below example:
require('chromedriver')
require('geckodriver')
And pass a String to  CustomWorld().forBrowser() to build the right one. 
This is a quick and dirty solution. 

**Option 2:** Testing on multiple browsers at once
Check out the Testing in multiple browsers at once section for code sample and explanation. 
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment
Also very quick and no hassle. 

**Option 3:** Use a config file to choose our browser or any other parameter.
The main benefit of this to use this for CI. 
First, choose your markup language. In case of JS, JSON is the obvious choice. 
Load the config file into the world.js (so it is accessible) before the CustomWorld() function. 
Make sure you run npm install config-json before. 
Setup:
1. Create a json file in the root directory
2. Add the following to it
{ "browser" : "chrome"}
3. In the world.js link these with: var configStuff = require('./config_example.json')
and then give this as a parameter .forBrowser(config.browser)

Do not forget to validate your config file. 
1. Firstly, check the syntax. https://jsonlint.com/
2. Secondly, validate errors that you throw and error when someone types in chrm instead of chrome. 

**Option 4:** Cloud testing integration when the project needs to be scaled up and many browsers are supported. 
_Browserstack_ has pretty good explanation on this:https://www.browserstack.com/automate/cucumberjs
(Also needs a config file)
Info about _SauceLab_ at the Sauce Labs section:
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment

# 4. Page Object Model
_1. Use an external library_
Depending on how you approach building your test framework and whether you use selenium-webdriver or aly alternatives, 
like webdriver.io, there cold be many libraries handy. 

_2. With a javascript object_
You need to have a grasp understanding of module.exports and exports. 
Some very good reading on the topic. 
https://marmelab.com/blog/2016/04/19/e2e-testing-with-node-and-es6.html
Also, see my implementation in my framework. 
1. Create a new directory under features directory.
2. Create a new .js file. 
3. Create your class with a constructor for the driver. 
4. Create another .js file, like loginPage or registrationPage. 
5. Create a new class and extend your original page. 
6. Create the constructor and set the properties, eg. set the loading URL. 
In case of the driver call super to use the parent object. 
Now you can start creating the methods on the page. Like register() or enterEmailAddress()
7. Add module.exports = yourPageName; at the end of each class. 
8. And require this on the step definition which will use the methods. 
9. On your step definition file declare the pages as variables like:
var myPage = new myPage(this.driver);
Now you will be able to call your previously deined methods like:
myPage.enterEmailAddress()

# 4. Reporting
_1._ You can use built in formatting and check result. If you are using WebStorm, follow the below instructions:
https://www.jetbrains.com/help/webstorm/export-test-results.html

_2.Use a pretty HTML reporter_
Firtsly, you need to generate the results in json format. 
If you add the following cucumber.js arugemnts when you run your tests, it will create a json file. 
cucumber_reports.json
-f json:test/report/cucumber_report.json
Then you need to convert json into a pretty html file. 
TBC


# 5. Screenshots