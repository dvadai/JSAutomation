Feature: Drag feature
  As a user
  I want to be able to drag elements on the page
  So that I can interact with the application

  Scenario Outline: User is able to drag and drop an element
    Given I am on the front page
    And I click on the draggable button
    And I am navigated to the draggable page
    When I select <element> from the list
    Then I can drag and drop an element
    Examples:
      | element   |
      | draggable |


  Scenario Outline: User is able to drag and drop and sort a list
    Given I am on the front page
    And I click on the draggable button
    And I am navigated to the draggable page
    When I select <element> from the list
    Then I am able to drag and drop and sort a list
    Examples:
      | element                |
      | draggable_and_sortable |