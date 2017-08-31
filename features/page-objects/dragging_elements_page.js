const {By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;
const Page = require('./load_page');


class DraggingElementsPage extends Page {

    constructor(driver) {
        super(driver);
    }


    wait() {
        this.driver.sleep(2000)
    }


    clickOnDragElements() {
        var clickOnDragElementsButton = this.driver.findElement(By.id('menu-item-140')).click()
        this.driver.sleep(2000)
    }

    clickOnConstrainMovementListItem(element) {
        var clickOnDragElementsButton = this.driver.findElement(By.id('ui-id-2')).click()
        this.driver.sleep(2000)
    }

    clickOnDraggableAndSortable(element) {
        var clickOnDraggableAndSortableButton = this.driver.findElement(By.id('ui-id-5')).click()
        this.driver.sleep(2000)
    }

    dragAnElementByCoordinates() {

        var dragElement = this.driver.findElement(By.id('draggabl'))
        this.driver.actions().dragAndDrop(dragElement, {x: 1300, y: 200}).perform()
        this.driver.sleep(2000)
    }

}

module.exports = DraggingElementsPage;