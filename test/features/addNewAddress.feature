Feature: User can add a new address as a Logged in user

  Scenario: User can add a new address
    Given I am on the login page
    And I accept cookies on the login page
    And I click on login button
    And I click on registration button
    And I enter password "Testgmail1@" for registration
    And I checked term and conditions
    And I click on registration button to complete registration
    And I click on addresses
    And I click on Add new address
    And I click on gender title
    And I enter the following details
      | firstName | lastName | streetAddress  | city               | zipCode |houseNumber |
      | Naresh    | Khunt    | Vloedanker | Werkendam | 4251DS |2 |
    And I click on new address button
    Then I should see street address  as "Vloedanker" of the new address