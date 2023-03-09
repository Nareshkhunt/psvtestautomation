Feature: Login Feature

  Scenario Outline: Error validation with empty email and password
    Given I am on the login page
    And I accept cookies on the login page
    When I click on login button
    And I click on <input> field on login page
    And I click on submit button
    Then I should see the error <message> for <input>

    Examples:
      | input    | message         |
      | email    | Vul het veld in |
      | password | Vul het veld in |

  Scenario Outline: Error validation with wrong email and password
    Given I am on the login page
    And I accept cookies on the login page
    When I click on login button
    And I enter wrong <inputValue> in <field> on login page
    And I enter valid input <validInput> in <field> on login page
    And I click on submit button
    Then I should see the error <message> for <field>

    Examples:
      | field    | inputValue | message                                            | validInput     |
      | email    | wrongInput | Sorry, dit is geen geldig e-mailadres              | pass123@1Abd   |
      | password | pass       | Je wachtwoord moet tussen 5 en 20 tekens lang zijn | test@gmail.com |

  Scenario: Login with a valid user
    Given I am on the login page
    And I accept cookies on the login page
    And I setup cookie
    When I log in with a valid user:
      | email               | password      |
      | nrshkhunt@gmail.com | Testingnl@123 |
# Then I should see a welcome message about my account
