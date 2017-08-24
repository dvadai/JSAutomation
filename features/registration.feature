Feature: Registration
  As a user
  I would like to register
  So I can use the site

  @smoke
  Scenario: User is able to log in with valid credentials
    Given I am on the front page
    When I enter my registration details
    And I submit my registration request
    Then I am registered