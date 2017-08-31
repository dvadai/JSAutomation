const {By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;
const Page = require('./load_page');




class DraggingElementsPage extends Page {

    constructor(driver) {
        super(driver);
    }


    clickOnDragElements() {
        var clickOnDragElementsButton  = this.driver.findElement(By.id('menu-item-140')).click()
        this.driver.sleep(2000)
    }
    clickOnSecondElementinList() {
        var clickOnDragElementsButton  = this.driver.findElement(By.id('ui-id-2')).click()
        this.driver.sleep(2000)
    }



    dragAnElementUp() {

        var dragElement = this.driver.findElement(By.id('draggabl'))
            this.driver.actions().dragAndDrop(dragElement, { x: 1300, y: 200 }).perform()
        this.driver.sleep(2000)
    }

}

module.exports = DraggingElementsPage;