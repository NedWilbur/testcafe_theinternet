Feature: JS Alerts

    Scenario: Standard Alert
        Given I open JS Alerts
        When I click on button with text "Alert"
        Then result text is "You successfully clicked an alert"

    Scenario: Confirm Alert
        Given I open JS Alerts
        When I click on button with text "Confirm"
        Then result text is "You clicked: Ok"

    Scenario: Prompt Alert
        Given I open JS Alerts
        When I click on button with text "Prompt"
        Then result text is "You entered: true"