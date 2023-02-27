Feature: Offers test cases

  Scenario: Validating if each offer is showing all the information
    Given I am opening the website on "offers" page
    When The user is in the offers page
    Then Validate with each offer have the correct elements
      | picture     |               |
      | title       |               |
      | description |               |
      | price       | equal to user |
      | phone       |               |
      | email       |               |
      | expiry date | 01/01/1970    |


