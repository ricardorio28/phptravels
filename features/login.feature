Feature: Login test cases

  Background:
    Given I am opening the website on "login" page

  Scenario Outline: Negative tests on Login Page
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an alert and then it will disappear

    Examples:
      | username            | password      |
      | wrongUser@test.pt   | wrongPassword |
      | wrongUser@test.pt   | demouser      |
      | user@phptravels.com | wrongPassword |

  Scenario Outline: testing login screen
    Given I am on the login page
    When I login with <username> and <password>
    Then The user navigates to the account page

    Examples:
      | username            | password |
      | user@phptravels.com | demouser |