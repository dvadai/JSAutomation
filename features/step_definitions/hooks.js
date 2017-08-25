var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before, After}) {

    Before(function () {
        this.count = 0;
    });

    After(function() {
        return this.driver.quit();
    });
});