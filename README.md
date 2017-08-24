# Javascript Automation


Selenium test automation framework using Javascript. A few sample tests and with description on how to set it up from scratch.
This framework uses:
Cucumber
Selenium-webdriver
chromedriver & firefoxdriver
For assertions:Chai.js

test website used: http://demoqa.com/


# The Basics
# 1. Prerequisites
Follow the setup instruction mentioned here: https://github.com/cucumber/cucumber-js/blob/master/docs/nodejs_example.md
Additionally get any other driver you will use like geckodriver.
# 1. The project structure
The main directory is the Features, everything is under this.
Features
    - my.feature
    - step_definitions(dir)
            - my_steps.js
            - hooks.js
    - support(dir)
            - world.js

