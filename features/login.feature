Feature: Login test cases

  Background:
    Given I am opening the website on "login" page

  Scenario: testing URL without login
    Given I am opening the website on "account" page
    When The user do not have access to the page see messages "404 Error" and "Page not Found"

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
