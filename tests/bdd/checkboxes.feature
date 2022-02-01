Feature: Checkboxes

  Scenario: Toggle Checkboxes
    Given I open checkboxes
    When I click some checkboxes
    | CheckboxIndex |
    | 0 |
    | 1 |
    Then the amount of selected checkboxes is "1"