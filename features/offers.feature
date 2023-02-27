Feature: Offers test cases

  Background:
    Given I am opening the website on "login" page

  Scenario: Validating if each offer is showing all the information
    Given I am on the login page
    When The user click on the "offers" from top menu
    Then The user navigates to the offers page
    #Given I am opening the website on "offers" page
    #When The user is in the offers page
    Then Validate with each offer have the correct elements
      | picture     |               |
      | title       |               |
      | description |               |
      | price       | equal to user |
      | phone       |               |
      | email       |               |
      | expiry date | 01/01/1970    |


